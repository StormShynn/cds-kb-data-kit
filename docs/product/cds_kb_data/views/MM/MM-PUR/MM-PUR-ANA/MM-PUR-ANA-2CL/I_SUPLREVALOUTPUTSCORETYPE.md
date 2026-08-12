---
name: I_SUPLREVALOUTPUTSCORETYPE
description: "Suplrevaloutputscoretype"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - interface-view
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLREVALOUTPUTSCORETYPE

**Suplrevaloutputscoretype**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrEvalScoreOutputActionType` | ✓ | |  | `cast ( dd07l.domvalue_l as mmpur_ana_de_output_act_typ )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.representativeKey: 'SuplrEvalScoreOutputActionType' 
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Analytics.dataCategory:#DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IMMSESOTPTTYP'
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Supplier Evaluation Output Score Type'
@Analytics.internalName:#LOCAL 
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ] 
@ObjectModel.sapObjectNodeType.name: 'SupplierEvaluationScore'
define root view I_SuplrEvalOutputScoreType 
  as select from dd07l

  composition [0..*] of I_SuplrEvalOutputScoreTypeText as _Text 
{
   
      @ObjectModel.text.association: '_Text'
  key cast ( dd07l.domvalue_l as mmpur_ana_de_output_act_typ ) as SuplrEvalScoreOutputActionType,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                        as DomainValue,
      
      _Text
      
}
where
      domname  = 'MMPUR_ANA_DM_OUTPUT_ACT_TYP'
  and as4local = 'A'
  and dd07l.as4vers = '0000'
```
