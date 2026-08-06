---
name: I_SUPLREVALSCOREOUTPUTSTATUS
description: Suplrevalscoreoutputstatus
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
  - interface-view
  - status
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLREVALSCOREOUTPUTSTATUS

**Suplrevalscoreoutputstatus**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SuplrEvalScoreOutputStatus` | `cast ( dd07l.domvalue_l as mmpur_ana_de_se_output_status )` |
| `DomainValue` | `dd07l.domvalue_l` |
| `_Text` | *Association* |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMSESOTPTSTS'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.representativeKey: 'SuplrEvalScoreOutputStatus' 
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Analytics.dataCategory:#DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@Analytics.internalName:#LOCAL 
@EndUserText.label: 'SE Score Output Status'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ] 
@ObjectModel.sapObjectNodeType.name: 'SupplierEvaluationScore'
define root view I_SuplrEvalScoreOutputStatus 
  as select from dd07l
  composition [0..*] of I_SuplrEvalScoreOutpStatusText as _Text 
{
   
      @ObjectModel.text.association: '_Text'
  key cast ( dd07l.domvalue_l as mmpur_ana_de_se_output_status ) as SuplrEvalScoreOutputStatus,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                        as DomainValue,
      
      _Text
      
}
where
      domname  = 'MMPUR_ANA_DM_SE_OUTPUT_STATUS'
  and as4local = 'A'
  and dd07l.as4vers = '0000'
```
