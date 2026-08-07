---
name: C_SUPLREVALSCORESOUTPUT
description: Suplrevalscoresoutput
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
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_SUPLREVALSCORESOUTPUT

**Suplrevalscoresoutput**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrEvalScoresOutputUUID` | ✓ | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `SupplierName` |  | | `_Supplier` | `SupplierName` |  |  |
| `IdentifierOfScoreHistoryJobRun` |  | |  |  |  |  |
| `SuplrEvalScoreOutputActionType` |  | |  |  |  |  |
| `SuplrEvalScoreOutpActnTypeText` |  | |  | `_OutputScoreTypeText._Text[1: Language = $session.system_language].SuplrEvalScoreOutpActnTypeText` |  |  |
| `SuplrEvalScoreOutputStatus` |  | |  |  |  |  |
| `SuplrEvalScoreOutputStatusText` |  | |  | `_OutputStatusText._Text[1: Language = $session.system_language].SuplrEvalScoreOutputStatusText` |  |  |
| `StartDate` |  | |  |  |  |  |
| `EndDate` |  | |  |  |  |  |
| `SuplrEvalScoreOutpTriggerDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  | `UserDescription` |  |  |
| `SuplrEvalScoreOutpCreationDate` |  | |  |  |  |  |
| `DisplayCurrency` |  | |  | `cast('' as waers)` |  |  |
| `_OutputScoreTypeText` | | ✓ | | | | |
| `_OutputStatusText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Supplier` | `I_Supplier` | [1..1] |

## Source Code

```abap
@ObjectModel.usageType.dataClass: #MIXED
@AbapCatalog.sqlViewName: 'CMMPURANASUPSCRO'
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@VDM.viewType: #CONSUMPTION
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck:#CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking:#BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Supplier Evaluation Score Output'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
//@OData.publish: true

define view C_SuplrEvalScoresOutput
  as select from P_SuplrEvalScoreOutput as ScoreOutput

  association [1..1] to I_Supplier as _Supplier on $projection.Supplier = _Supplier.Supplier

{
      @UI.facet: [
         {
           label:'General Information',
           id:'GeneralInformation',
           purpose: #STANDARD,
           type: #FIELDGROUP_REFERENCE,
           targetQualifier: 'GeneralInformation',
           position: 20
         }
      ]

      @UI.hidden: true
  key SuplrEvalScoresOutputUUID,

      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
      @UI.lineItem.importance: #HIGH
      @UI.lineItem.position: 10
      @Consumption.semanticObject  : 'Supplier'
      @UI.fieldGroup: [ { qualifier: 'GeneralInformation', position: 101 } ]
      @EndUserText.label: 'Supplier'
      @ObjectModel.text.element:  [ 'SupplierName' ]
      @Consumption.labelElement: 'SupplierName'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'I_Supplier', element : 'Supplier' } }]
      @UI.selectionField: [{position:  10}]
      Supplier,

      @Semantics.text: true
      _Supplier.SupplierName,

      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
      @UI.fieldGroup: [ { groupLabel: 'General Information',qualifier: 'GeneralInformation', position: 102 } ]
      IdentifierOfScoreHistoryJobRun,

      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
      @UI.lineItem.importance: #HIGH
      @UI.lineItem.position: 20
      @UI.selectionField: [{position:  20}]
      @EndUserText.label: 'Score Output Type'      
      @UI.fieldGroup: [ { qualifier: 'GeneralInformation', position: 103 } ]
      @ObjectModel.text.element:  [ 'SuplrEvalScoreOutpActnTypeText' ]
      @Consumption.labelElement: 'SuplrEvalScoreOutpActnTypeText'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'C_MM_SuplrEvalOutpScoreTypeVH', element : 'SuplrEvalScoreOutputActionType' } }]
      SuplrEvalScoreOutputActionType,

      @Semantics.text: true
      _OutputScoreTypeText._Text[1: Language = $session.system_language].SuplrEvalScoreOutpActnTypeText as SuplrEvalScoreOutpActnTypeText,

      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
      @UI.lineItem.importance: #HIGH
      @UI.selectionField: [{position:  60}]
      @UI.lineItem.position: 70
      @EndUserText.label: 'Output Status'
      @ObjectModel.text.element:  [ 'SuplrEvalScoreOutputStatusText' ]
      @Consumption.labelElement: 'SuplrEvalScoreOutputStatusText'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'C_MM_SuplrEvalScoreOutpStatus', element : 'SuplrEvalScoreOutputStatus' } }]
      SuplrEvalScoreOutputStatus,

      @Semantics.text: true
      _OutputStatusText._Text[1: Language = $session.system_language].SuplrEvalScoreOutputStatusText    as SuplrEvalScoreOutputStatusText,

      @UI.lineItem.importance: #HIGH
      @UI.lineItem.position: 30
      @UI.selectionField: [{position:  30}]
      @EndUserText.label: 'Evaluation Start Date'
      @Consumption.filter : {selectionType:#SINGLE,multipleSelections: false}
      StartDate,

      @UI.lineItem.importance: #HIGH
      @UI.lineItem.position: 40
      @UI.selectionField: [{position:  40}]
      @EndUserText.label: 'Evaluation End Date'
      @Consumption.filter : {selectionType:#SINGLE,multipleSelections: false}
      EndDate,

      @UI.lineItem.importance: #HIGH
      @UI.lineItem.position: 60
      @UI.selectionField: [{position:  50}]
      @Consumption.filter : {selectionType:#INTERVAL,multipleSelections: false}
      SuplrEvalScoreOutpTriggerDate,

      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
      @UI.lineItem.importance: #HIGH
      @UI.lineItem.position: 70
      @EndUserText.label: 'Created By'
      UserDescription as CreatedByUser,

      @UI.lineItem.importance: #HIGH
      @EndUserText.label: 'Score Creation Date'
      @UI.selectionField: [{position:  70}]
      @Consumption.filter : {selectionType:#INTERVAL,multipleSelections: false}
      SuplrEvalScoreOutpCreationDate,

      @Consumption.valueHelpDefinition: [{ entity: { name : 'I_Currency', element : 'Currency' } }]
      cast('' as waers)                                                                                 as DisplayCurrency,

      /* Associations */
      _OutputScoreTypeText,
      _OutputStatusText

}
```
