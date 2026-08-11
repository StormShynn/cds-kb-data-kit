---
name: I_PUBSECAVAILYCTRLPROFILE
description: "Availability Control Profile for Public Sector"
app_component: PSM-FM-BU-AC
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECAVAILYCTRLPROFILE')/$value
semantic_en: "Availability Control Profile for Public Sector"
semantic_vi: "Availability Control Profile for Public Sector — CDS view giao diện dựa trên psm_d_avc_prf_hd."
keywords:
  - "availability"
  - "control"
  - "profile"
  - "for"
  - "public"
  - "sector"
  - "budget"
  - "scenario"
tags:
  - PSM
  - bo:companycode
  - component:PSM-FM-BU-AC
  - interface-view
  - PSM-FM
  - PSM-FM-BU
  - PSM-FM-BU-AC
---
# I_PUBSECAVAILYCTRLPROFILE

**Availability Control Profile for Public Sector**

| Property | Value |
|---|---|
| App Component | `PSM-FM-BU-AC` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECAVAILYCTRLPROFILE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AvailabilityControlProfile` | ✓ | |  | `cast( Main.profile as psm_s4c_fm_avc_profile preserving type )` | `CHAR(6)` | Budget Availability Control Profile for Public Sector Mgmt |
| `BudgetScenario` |  | |  | `budget_scenario` | `CHAR(30)` | Budgeting Scenario |
| `_Text` | | ✓ | | | | |
| `_PubSecBudgetScenario` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AvailabilityCtrlProfileText` | [0..*] |
| `_PubSecBudgetScenario` | `I_PubSecBudgetScenario` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECAVAILYCTRLPROFILE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECAVAILYCTRLPROFILE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPSMS4CAVCPRFL'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED

@VDM.viewType: #BASIC
@Analytics: {
     dataCategory: #DIMENSION,
     dataExtraction.enabled: false,
     internalName: #LOCAL
}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
     dataCategory: #VALUE_HELP,
     representativeKey: 'AvailabilityControlProfile',
     usageType: {
         dataClass: #META,
         serviceQuality: #C,
         sizeCategory: #S
     },
     resultSet.sizeCategory: #XS,
     supportedCapabilities: [ #ANALYTICAL_DIMENSION ]
}
@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Availability Control Profile for Public Sector'
define view I_PubSecAvailyCtrlProfile 
  as select from psm_d_avc_prf_hd as Main
     inner join finsc_avc_prof as FinAvc on Main.profile = FinAvc.profile
  association [0..*] to I_AvailabilityCtrlProfileText  as _Text                 on $projection.AvailabilityControlProfile = _Text.AvailabilityControlProfile
  association [0..1] to I_PubSecBudgetScenario         as _PubSecBudgetScenario on $projection.BudgetScenario = _PubSecBudgetScenario.BudgetScenario
{
      @ObjectModel.text.association: '_Text'
  key cast( Main.profile as psm_s4c_fm_avc_profile preserving type ) as AvailabilityControlProfile,
      @ObjectModel.foreignKey.association: '_PubSecBudgetScenario'
      Main.budget_scenario      as BudgetScenario,
      
      _PubSecBudgetScenario,    
      _Text
} where FinAvc.profile_type = 'PM'
```
