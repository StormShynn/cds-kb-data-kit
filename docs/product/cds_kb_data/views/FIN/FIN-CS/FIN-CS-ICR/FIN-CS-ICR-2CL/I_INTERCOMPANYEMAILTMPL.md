---
name: I_INTERCOMPANYEMAILTMPL
description: "ICA Intercompany Email Template"
app_component: FIN-CS-ICR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTERCOMPANYEMAILTMPL')/$value
semantic_en: "ICA Intercompany Email Template"
semantic_vi: "ICA Intercompany Email Template — CDS view giao diện dựa trên icadocm."
keywords:
  - "ica"
  - "intercompany"
  - "email"
  - "template"
  - "matching"
  - "method"
  - "document"
  - "item"
  - "company"
  - "trading"
  - "partner"
tags:
  - FIN
  - component:FIN-CS-ICR-2CL
  - FIN-CS
  - FIN-CS-ICR
  - FIN-CS-ICR-2CL
  - interface-view
  - lob:finance
---
# I_INTERCOMPANYEMAILTMPL

**ICA Intercompany Email Template**

| Property | Value |
|---|---|
| App Component | `FIN-CS-ICR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTERCOMPANYEMAILTMPL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MatchingMethodID` | ✓ | |  | `method_id` | `CHAR(5)` | Matching Method ID |
| `MatchingDocument` | ✓ | |  | `docnr` | `NUMC(10)` | Matching Document Number |
| `MatchingDocumentItem` | ✓ | |  | `docln` | `INT4(10)` | Matching Document Line Item Number |
| `Company` |  | |  | `rcomp` | `CHAR(6)` | Company |
| `TradingPartner` |  | |  | `rassc` | `CHAR(6)` | Company ID of Trading Partner |
| `MatchingAssignmentNumber` |  | |  | `grref` | `NUMC(12)` | Assignment Number |
| `MatchingMethodDesc` |  | |  | `descm` | `CHAR(80)` | Medium Length Description |
| `MatchingRuleID` |  | |  | `rule_id` | `NUMC(4)` | Matching Rule ID |
| `MatchingRuleDesc` |  | |  | `descm` | `CHAR(80)` | Medium Length Description |
| `MatchingReasonCode` |  | |  | `rcode` | `CHAR(6)` | Reason Code |
| `MatchingReasonCodeDesc` |  | |  | `descm` | `CHAR(80)` | Medium Length Description |
| `FiscalYearPeriod` |  | |  | `cast( coalesce( genj_ffd.fiscal_year_period, cons_ffd.fiscal_year_period ) as fins_fyearperiod preserving type )` | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `ReconciliationCaseID` |  | |  | `recon_case_id` | `CHAR(5)` | Reconciliation Case ID |
| `ReconciliationCaseDesc` |  | |  | `descm` | `CHAR(80)` | Medium Length Description |
| `LoggedInUser` |  | |  | `bname` | `CHAR(12)` | User Name in User Master Record |
| `UserDescription` |  | |  | `name_text` | `CHAR(80)` | Full Name of Person |
| `_Company` | | ✓ | | | | |
| `_PartnerCompany` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Company` | `I_Globalcompany` | [1] |
| `_PartnerCompany` | `I_Globalcompany` | [1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTERCOMPANYEMAILTMPL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTERCOMPANYEMAILTMPL')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICAICOETMPL'
@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'ICA Intercompany Email Template'
@VDM.viewType: #BASIC
@ObjectModel.usageType: {
  dataClass: #MIXED,
  serviceQuality: #X,
  sizeCategory: #L
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[ #OUTPUT_EMAIL_DATA_PROVIDER ] 
define view I_IntercompanyEmailTmpl
  as select from    icadocm          as docm
    left outer to one join ica_methodt      as mtxt     on  docm.method_id   = mtxt.method_id
                                                        and mtxt.langu       = $session.system_language
    left outer to one join ica_assign       as assign   on  docm.grref       = assign.grref
    left outer to one join ica_method_rulet as rtxt     on  docm.method_id   = rtxt.method_id
                                                        and docm.rule_id     = rtxt.rule_id
                                                        and rtxt.langu       = $session.system_language
    left outer to one join ica_rct          as rctxt    on  assign.rcode     = rctxt.rcode
                                                        and rctxt.langu      = $session.system_language
    left outer to one join ica_recon_case   as rc       on  docm.method_id   = rc.method_id
    left outer to one join ica_recon_caset  as rct      on  rc.recon_case_id = rct.recon_case_id
                                                        and rct.langu        = $session.system_language
    left outer to one join usr21            as user     on  user.bname       = $session.user
    left outer to one join adrp             as adress   on user.persnumber   = adress.persnumber
  -- Map calendar to fiscal
    left outer to one join finsc_fisc_date  as genj_ffd on  genj_ffd.fiscal_year_variant = docm.periv
                                                        and genj_ffd.calendar_date       = $session.system_date 
  -- Get fiscal year variant
    left outer to one join tf200                        on  tf200.rvers                  = docm.rvers
  -- Map calendar to fiscal
    left outer to one join finsc_fisc_date  as cons_ffd on  cons_ffd.fiscal_year_variant = tf200.periv
                                                        and cons_ffd.calendar_date       = $session.system_date                                                       

  association [1] to I_Globalcompany as _Company        on docm.rcomp = _Company.Company
  association [1] to I_Globalcompany as _PartnerCompany on docm.rassc = _PartnerCompany.Company
{
  key docm.method_id                                                                 as MatchingMethodID,
  key docm.docnr                                                                     as MatchingDocument,
  key docm.docln                                                                     as MatchingDocumentItem,
      docm.rcomp                                                                     as Company,
      docm.rassc                                                                     as TradingPartner,
      docm.grref                                                                     as MatchingAssignmentNumber,
      mtxt.descm                                                                     as MatchingMethodDesc,
      docm.rule_id                                                                   as MatchingRuleID,
      rtxt.descm                                                                     as MatchingRuleDesc,
      assign.rcode                                                                   as MatchingReasonCode,
      rctxt.descm                                                                    as MatchingReasonCodeDesc, 
      cast( coalesce( genj_ffd.fiscal_year_period, cons_ffd.fiscal_year_period ) as fins_fyearperiod preserving type ) as FiscalYearPeriod,
      rc.recon_case_id                                                               as ReconciliationCaseID,
      rct.descm                                                                      as ReconciliationCaseDesc,
      user.bname                                                                     as LoggedInUser,
      adress.name_text                                                               as UserDescription,

      _Company,
      _PartnerCompany
}
```
