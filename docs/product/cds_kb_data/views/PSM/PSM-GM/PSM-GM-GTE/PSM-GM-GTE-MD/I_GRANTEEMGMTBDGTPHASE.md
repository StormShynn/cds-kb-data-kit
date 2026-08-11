---
name: I_GRANTEEMGMTBDGTPHASE
description: "Grantee Management Budget Phase"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBDGTPHASE')/$value
semantic_en: "Grantee Management Budget Phase"
semantic_vi: "Grantee Management Budget Phase — CDS view giao diện dựa trên dd07l."
keywords:
  - "grantee"
  - "management"
  - "budget"
  - "phase"
  - "mgmt"
  - "bdgt"
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
# I_GRANTEEMGMTBDGTPHASE

**Grantee Management Budget Phase**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBDGTPHASE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GranteeMgmtBdgtPhase` | ✓ | |  | `cast ( cast ( substring( dd07l.domvalue_l, 1, 1 ) as abap.char( 1 ) ) as gm_bdgt_phase )` | `CHAR(1)` | Budget Phase |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBDGTPHASE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBDGTPHASE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IGMBDGTPHASE'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Grantee Management Budget Phase'

@VDM.viewType: #BASIC
@Analytics: {
     dataCategory: #DIMENSION,
     dataExtraction.enabled: true,
     internalName: #LOCAL
}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
     dataCategory: #VALUE_HELP,
     sapObjectNodeType.name: 'GranteeManagementBudgetPhase',     
     representativeKey: 'GranteeMgmtBdgtPhase',
     usageType: {
         dataClass: #META,
         serviceQuality: #A,
         sizeCategory: #S
     },
     resultSet.sizeCategory: #XS,
     supportedCapabilities: [ #ANALYTICAL_DIMENSION ]
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define root view I_GranteeMgmtBdgtPhase
  as select from dd07l
  composition [0..*] of I_GranteeMgmtBdgtPhaseText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast ( cast ( substring( dd07l.domvalue_l, 1, 1 )
                    as abap.char( 1 ) ) as gm_bdgt_phase ) as GranteeMgmtBdgtPhase,
      @Consumption.hidden: true
      @Analytics.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                     as DomainValue,

      _Text

}
where
      domname  = 'GM_BDGT_PHASE'
  and as4local = 'A'
```
