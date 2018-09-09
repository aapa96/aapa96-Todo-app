var Todo = require('./model');


function test(req,res){
    res.status(200).send({Message:'Controller OK'});
}

// *  C R U D *

//CREATE

function createTodo(req,res){
    let todo = new Todo();
    let params = req.body;
    todo.name = params.name;
    todo.note = params.note;
    todo.save((err,stored) => {
        if (err) {
            res.status(500).send({ Message:"Error in the request" });
        } else { 
            if (!stored) {
                res.status(404).send({ Message:"Not found" });
            } else {
                console.log(todo);
                res.status(200).send({ Todo:stored });
            }
        }
    });
}

function readTodo(req,res){
    Todo.find((err,todo) => {
        if (err) {
			res.status(500).send({Message:'Error in the request'});
		} else {
			if (!todo){
				res.status(404).send({Message:'Not found'});
			}else {
				res.status(200).send({todo});
			}
		}
    });
}

function updateTodo(req,res){
    var todoId = req.params.id;
    var update = req.body;
    Todo.findOneAndUpdate(todoId, update, (err,updated) =>{
        if(err){
			res.status(500).send({Message:"Erro in the request"});
		}else{
			if(!updated){
				res.status(404).send({Message:"Not found"});
			}else{
				res.status(200).send({todo:updated});
			}
		}
    });
}

function deleteTodo(req,res){
    var todoId = req.params.id;
    Todo.findOneAndDelete(todoId, (err,removed) =>{
        if(err){
			res.status(500).send({Message:"Error in the request"});
		}else{
			if(!removed){
				res.status(404).send({Message:"Not found"});
			}else{
				res.status(200).send({removed});
			}
		}
    });
}


module.exports = {
    test,
    createTodo,
    readTodo,
    updateTodo,
    deleteTodo
    
}