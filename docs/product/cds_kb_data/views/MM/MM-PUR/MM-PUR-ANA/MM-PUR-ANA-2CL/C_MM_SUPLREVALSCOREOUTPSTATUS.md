---
name: C_MM_SUPLREVALSCOREOUTPSTATUS
description: "MM Suplrevalscoreoutpstatus"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - status
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_MM_SUPLREVALSCOREOUTPSTATUS

**MM Suplrevalscoreoutpstatus**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrEvalScoreOutputStatus` | ✓ | |  | `cast( SuplrEvalScoreOutputStatus as mmpur_ana_de_output_act_typ)` |  |  |
| `SuplrEvalScoreOutputStatusText` |  | |  | `_Text[1: Language = $session.system_language ].SuplrEvalScoreOutputStatusText` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CMMSESOTPTSTVH'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #REQUIRED
@VDM.viewType: #CONSUMPTION
@AbapCatalog.preserveKey:true
@ObjectModel.dataCategory: #VALUE_HELP
@Search.searchable: true
@ObjectModel.semanticKey: ['SuplrEvalScoreOutputStatus']
@ObjectModel.representativeKey: 'SuplrEvalScoreOutputStatus'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Value Help for SE Score Output Status'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations:true 
define view C_MM_SuplrEvalScoreOutpStatus 

 as select from I_SuplrEvalScoreOutputStatus
{
       @Search.ranking: #HIGH
       @ObjectModel.text.element: ['SuplrEvalScoreOutputStatusText']
       @Consumption.labelElement: 'SuplrEvalScoreOutputStatusText'
  key  cast( SuplrEvalScoreOutputStatus   as mmpur_ana_de_output_act_typ) as SuplrEvalScoreOutputStatus,

       @Semantics.text: true
       @Search: { defaultSearchElement: true, ranking: #LOW,  fuzzinessThreshold: 0.8   }
       _Text[1: Language = $session.system_language ].SuplrEvalScoreOutputStatusText                                   as SuplrEvalScoreOutputStatusText
}
```
