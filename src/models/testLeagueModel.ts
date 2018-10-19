
  export interface League {
    league_key?: string | null;
    league_id?: string | null;
    name?: string | null;
    url?: string | null;
    logo_url?: boolean | null;
    draft_status?: string | null;
    num_teams?: number | null;
    edit_key?: number | null;
    weekly_deadline?: string | null;
    league_update_timestamp?: string | null;
    scoring_type?: string | null;
    league_type?: string | null;
    renew?: string | null;
    renewed?: string | null;
    iris_group_chat_id?: string | null;
    allow_add_to_dl_extra_pos?: number | null;
    is_pro_league?: string | null;
    is_cash_league?: string | null;
    current_week?: number | null;
    start_week?: string | null;
    start_date?: string | null;
    end_week?: string | null;
    end_date?: string | null;
    game_code?: string | null;
    season?: string | null;
    standings?: (Standings)[] | null;
  }

  export interface Standings {
    teams: Teams;
  }

  export interface Teams {
    team_key?: string | null;
    team_id?: string | null;
    name?: string | null;
    url?: string | null;
    // team_logos?: (TeamLogosEntity)[] | null;
    division_id?: string | null;
    waiver_priority?: number | null;
    faab_balance?: string | null;
    number_of_moves?: string | null;
    number_of_trades?: string | null;
    // roster_adds?: RosterAdds | null;
    league_scoring_type?: string | null;
    draft_position?: number | null;
    has_draft_grade?: number | null;
    draft_grade?: string | null;
    draft_recap_url?: string | null;
    // managers?: (ManagersEntity)[] | null;
  }

