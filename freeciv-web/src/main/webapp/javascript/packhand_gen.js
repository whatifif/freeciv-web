 /* Generated by generate_js_hand.py */
function client_handle_packet(p) 
{
 if (p == null) return;
 try {
  for (var i = 0; i < p.length; i++) {
    if (p[i] == null) continue;
    var packet_type = p[i]['pid'];
    switch (packet_type) {

    case  0:
      handle_processing_started(p[i]);
      break;

    case  1:
      handle_processing_finished(p[i]);
      break;

    case  5:
      handle_server_join_reply(p[i]);
      break;

    case  6:
      handle_authentication_req(p[i]);
      break;

    case  8:
      handle_server_shutdown(p[i]);
      break;

    case  12:
      handle_endgame_report(p[i]);
      break;

    case  15:
      handle_tile_info(p[i]);
      break;

    case  16:
      handle_game_info(p[i]);
      break;

    case  17:
      handle_map_info(p[i]);
      break;

    case  18:
      handle_nuke_tile_info(p[i]);
      break;

    case  19:
      handle_team_name_info(p[i]);
      break;

    case  25:
      handle_chat_msg(p[i]);
      break;

    case  27:
      handle_connect_msg(p[i]);
      break;

    case  30:
      handle_city_remove(p[i]);
      break;

    case  31:
      handle_city_info(p[i]);
      break;

    case  32:
      handle_city_short_info(p[i]);
      break;

    case  44:
      handle_city_name_suggestion_info(p[i]);
      break;

    case  45:
      handle_city_sabotage_list(p[i]);
      break;

    case  50:
      handle_player_remove(p[i]);
      break;

    case  51:
      handle_player_info(p[i]);
      break;

    case  58:
      handle_player_attribute_chunk(p[i]);
      break;

    case  59:
      handle_player_diplstate(p[i]);
      break;

    case  62:
      handle_unit_remove(p[i]);
      break;

    case  63:
      handle_unit_info(p[i]);
      break;

    case  64:
      handle_unit_short_info(p[i]);
      break;

    case  65:
      handle_unit_combat_info(p[i]);
      break;

    case  85:
      handle_unit_diplomat_answer(p[i]);
      break;

    case  88:
      handle_conn_ping(p[i]);
      break;

    case  96:
      handle_diplomacy_init_meeting(p[i]);
      break;

    case  98:
      handle_diplomacy_cancel_meeting(p[i]);
      break;

    case  100:
      handle_diplomacy_create_clause(p[i]);
      break;

    case  102:
      handle_diplomacy_remove_clause(p[i]);
      break;

    case  104:
      handle_diplomacy_accept_treaty(p[i]);
      break;

    case  110:
      handle_page_msg(p[i]);
      break;

    case  115:
      handle_conn_info(p[i]);
      break;

    case  116:
      handle_conn_ping_info(p[i]);
      break;

    case  125:
      handle_end_phase(p[i]);
      break;

    case  126:
      handle_start_phase(p[i]);
      break;

    case  127:
      handle_new_year(p[i]);
      break;

    case  128:
      handle_begin_turn(p[i]);
      break;

    case  129:
      handle_end_turn(p[i]);
      break;

    case  130:
      handle_freeze_client(p[i]);
      break;

    case  131:
      handle_thaw_client(p[i]);
      break;

    case  137:
      handle_spaceship_info(p[i]);
      break;

    case  140:
      handle_ruleset_unit(p[i]);
      break;

    case  141:
      handle_ruleset_game(p[i]);
      break;

    case  142:
      handle_ruleset_specialist(p[i]);
      break;

    case  143:
      handle_ruleset_government_ruler_title(p[i]);
      break;

    case  144:
      handle_ruleset_tech(p[i]);
      break;

    case  145:
      handle_ruleset_government(p[i]);
      break;

    case  146:
      handle_ruleset_terrain_control(p[i]);
      break;

    case  147:
      handle_ruleset_nation_groups(p[i]);
      break;

    case  148:
      handle_ruleset_nation(p[i]);
      break;

    case  149:
      handle_ruleset_city(p[i]);
      break;

    case  150:
      handle_ruleset_building(p[i]);
      break;

    case  151:
      handle_ruleset_terrain(p[i]);
      break;

    case  152:
      handle_ruleset_unit_class(p[i]);
      break;

    case  153:
      handle_ruleset_base(p[i]);
      break;

    case  155:
      handle_ruleset_control(p[i]);
      break;

    case  161:
      handle_single_want_hack_reply(p[i]);
      break;

    case  162:
      handle_ruleset_choices(p[i]);
      break;

    case  163:
      handle_game_load(p[i]);
      break;

    case  164:
      handle_server_setting_control(p[i]);
      break;

    case  165:
      handle_server_setting_const(p[i]);
      break;

    case  166:
      handle_server_setting_bool(p[i]);
      break;

    case  167:
      handle_server_setting_int(p[i]);
      break;

    case  168:
      handle_server_setting_str(p[i]);
      break;

    case  169:
      handle_server_setting_enum(p[i]);
      break;

    case  170:
      handle_server_setting_bitwise(p[i]);
      break;

    case  175:
      handle_ruleset_effect(p[i]);
      break;

    case  176:
      handle_ruleset_effect_req(p[i]);
      break;

    case  177:
      handle_ruleset_resource(p[i]);
      break;

    case  180:
      handle_scenario_info(p[i]);
      break;

    case  185:
      handle_vote_new(p[i]);
      break;

    case  186:
      handle_vote_update(p[i]);
      break;

    case  187:
      handle_vote_remove(p[i]);
      break;

    case  188:
      handle_vote_resolve(p[i]);
      break;

    case  204:
      handle_edit_startpos(p[i]);
      break;

    case  205:
      handle_edit_startpos_full(p[i]);
      break;

    case  219:
      handle_edit_object_created(p[i]);
      break;

    case  220:
      handle_ruleset_road(p[i]);
      break;

    case  223:
      handle_endgame_player(p[i]);
      break;

    case  224:
      handle_ruleset_disaster(p[i]);
      break;

    case  225:
      handle_rulesets_ready(p[i]);
      break;

    case  228:
      handle_info_text_message(p[i]);
      break;

    case  230:
      handle_goto_path(p[i]);
      break;
 
    }
  }
 
  if (p.length > 0) {
    if (debug_active) clinet_debug_collect();
    update_map_canvas_full();
  }

 } catch(e) {
   if (e.message != null && e.fileName != null && e.lineNumber != null) {
     js_breakpad_report(e.message, e.fileName, e.lineNumber);
   } else if (e.message != null) {
     js_breakpad_report(e.message, "generate_js_hand.py", 0);
   } else {
     js_breakpad_report("unknown network error", "generate_js_hand.py", 0);
   }
 }

}
