const { move } = require('../../../models');

async function getByName(name) {
    return move.findOne(
        { name },
        {
            '_id': 0,
            '__v': 0,
            'contest_combos.normal.use_before._id': 0,
            'contest_combos.normal.use_after._id': 0,
            'effect_entries._id': 0,
            'effect_changes.effect_entries._id': 0,
            'names._id': 0,
            'learned_by_pokemon._id': 0,
            'flavor_text_entries._id': 0,
            'machines._id': 0,
            'past_values._id': 0,
            'past_values.effect_entries._id': 0,
            'stat_changes._id': 0,
        }
    );
}

async function getByID(id) {
    return move.findOne(
        { id },
        {
            '_id': 0,
            '__v': 0,
            'contest_combos.normal.use_before._id': 0,
            'contest_combos.normal.use_after._id': 0,
            'effect_entries._id': 0,
            'effect_changes.effect_entries._id': 0,
            'names._id': 0,
            'learned_by_pokemon._id': 0,
            'flavor_text_entries._id': 0,
            'machines._id': 0,
            'past_values._id': 0,
            'past_values.effect_entries._id': 0,
            'stat_changes._id': 0,
        }
    );
}

async function getList(offset, limit) {
    return move
        .find(
            {},
            {
                '_id': 0,
                '__v': 0,
                'contest_combos.normal.use_before._id': 0,
                'contest_combos.normal.use_after._id': 0,
                'effect_entries._id': 0,
                'effect_changes.effect_entries._id': 0,
                'names._id': 0,
                'learned_by_pokemon._id': 0,
                'flavor_text_entries._id': 0,
                'machines._id': 0,
                'past_values._id': 0,
                'past_values.effect_entries._id': 0,
                'stat_changes._id': 0,
            }
        )
        .skip(offset)
        .limit(limit);
}

module.exports = {
    getByID,
    getByName,
    getList,
};
