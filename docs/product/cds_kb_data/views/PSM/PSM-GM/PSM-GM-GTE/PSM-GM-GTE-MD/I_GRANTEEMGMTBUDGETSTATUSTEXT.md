---
name: I_GRANTEEMGMTBUDGETSTATUSTEXT
description: "Grantee Mgmt Budget Status - Text"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBUDGETSTATUSTEXT')/$value
semantic_en: "Grantee Mgmt Budget Status - Text"
semantic_vi: "Grantee Mgmt Budget Status - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "grantee"
  - "mgmt"
  - "budget"
  - "status"
  - "text"
  - "language"
  - "domain"
  - "value"
  - "name"
tags:
  - PSM
  - budget
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
---
# I_GRANTEEMGMTBUDGETSTATUSTEXT

**Grantee Mgmt Budget Status - Text**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBUDGETSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras )` | `LANG(1)` | Language Key |
| `GranteeMgmtBudgetStatus` | ✓ | |  | `cast ( cast ( substring( dd07t.domvalue_l, 1, 1 ) as abap.char( 1 ) ) as gm_bdgt_status )` | `CHAR(1)` | Budget Status: Unreleased/Released |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `GranteeMgmtBudgetStatusName` |  | |  | `cast ( substring ( dd07t.ddtext, 1, 45 ) as gmis_bdgt_status_name )` | `CHAR(45)` | Budget Status Name |
| `DomainValueName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_GranteeMgmtBudgetStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBUDGETSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBUDGETSTATUSTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IGMBDGTSTATUST'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Grantee Mgmt Budget Status - Text'

@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
     dataCategory: #TEXT,
     representativeKey: 'GranteeMgmtBudgetStatus',
     usageType: {
         dataClass: #META,
         serviceQuality: #A,
         sizeCategory: #S
     },
     supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_GranteeMgmtBudgetStatusText
  as select from dd07t
  association        to parent I_GranteeMgmtBudgetStatus as _GranteeMgmtBudgetStatus on $projection.GranteeMgmtBudgetStatus = _GranteeMgmtBudgetStatus.GranteeMgmtBudgetStatus
  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( dd07t.ddlanguage as spras )              as Language,
      @ObjectModel.foreignKey.association: '_GranteeMgmtBudgetStatus'
      @ObjectModel.text.element: ['GranteeMgmtBudgetStatusName']
  key cast ( cast ( substring( dd07t.domvalue_l, 1, 1 )
             as abap.char( 1 ) ) as gm_bdgt_status ) as GranteeMgmtBudgetStatus,
      @Consumption.hidden: true
      @Analytics.hidden: true
      dd07t.domvalue_l                               as DomainValue,
      @Semantics.text: true
      cast ( substring ( dd07t.ddtext, 1, 45 )
             as gmis_bdgt_status_name )              as GranteeMgmtBudgetStatusName,
      @Consumption.hidden: true
      @Analytics.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07t.ddtext                                   as DomainValueName, 
      _GranteeMgmtBudgetStatus,
      _Language
}
where
      domname  = 'GM_BDGT_STATUS'
  and as4local = 'A'
```
