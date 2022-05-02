const mongoose = require('mongoose');
const { default: Project } = require('../../client/scr/pages/project');

const { Schema } = mongoose;

const projectSchema = new Project({
    title: {
        type: String,
        required: true,
    },
    
    authors:{
        type: String,
        required: true,
    },

    description:{
        type: String,
        required: true,
    },
    // possible to do a multiple choice type situation
    // I would need to change string to an Objectid to target a option list in creactproject pages
    techUsed:{
        type: String,
        required: true,
    },

    date:{

    }


})