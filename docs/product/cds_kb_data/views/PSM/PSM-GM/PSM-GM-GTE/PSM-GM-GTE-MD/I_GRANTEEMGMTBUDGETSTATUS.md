---
name: I_GRANTEEMGMTBUDGETSTATUS
description: "Budget Status"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBUDGETSTATUS')/$value
semantic_en: "Budget Status"
semantic_vi: "Budget Status — CDS view giao diện dựa trên dd07l."
keywords:
  - "budget"
  - "status"
  - "grantee"
  - "mgmt"
  - "domain"
  - "value"
tags:
  - PSM
  - budget
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
---
# I_GRANTEEMGMTBUDGETSTATUS

**Budget Status**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBUDGETSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GranteeMgmtBudgetStatus` | ✓ | |  | `cast ( cast ( substring( dd07l.domvalue_l, 1, 1 ) as abap.char( 1 ) ) as gm_bdgt_status )` | `CHAR(1)` | Budget Status: Unreleased/Released |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBUDGETSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBUDGETSTATUS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IGMBDGTSTATUS'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Budget Status'

@VDM.viewType: #BASIC
@Analytics: {
     dataCategory: #DIMENSION,
     dataExtraction.enabled: true,
     internalName: #LOCAL
}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
     dataCategory: #VALUE_HELP,
     representativeKey: 'GranteeMgmtBudgetStatus',
     sapObjectNodeType: {
         name: 'GranteeManagementBudgetStatus'
     },
     usageType: {
         dataClass: #META,
         serviceQuality: #A,
         sizeCategory: #S
     },
     resultSet.sizeCategory: #XS,
     supportedCapabilities: [ #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ]
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define root view I_GranteeMgmtBudgetStatus
  as select from dd07l

  composition [0..*] of I_GranteeMgmtBudgetStatusText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast ( cast ( substring( dd07l.domvalue_l, 1, 1 ) as abap.char( 1 ) ) 
                    as gm_bdgt_status ) as GranteeMgmtBudgetStatus,
      @Consumption.hidden: true
      @Analytics.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                             as DomainValue,

      _Text

}
where
      domname  = 'GM_BDGT_STATUS'
  and as4local = 'A'
```
