---
name: I_SUPLREVALUSRDFNDCRITERIATEXT
description: "Suplrevalusrdfndcriteriatext"
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
  - text-view
  - text
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLREVALUSRDFNDCRITERIATEXT

**Suplrevalusrdfndcriteriatext**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrEvalUserDefinedCriteria` | ✓ | |  | `criterion_id` |  |  |
| `Language` | ✓ | |  | `language` |  |  |
| `SuplrEvalUserDfndCriteriaDesc` |  | |  | `critrion_desc` |  |  |
| `_Userdefinedcriteria` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Userdefinedcriteria` | `I_SuplrEvalUserDefinedCriteria` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@AbapCatalog.sqlViewName: 'ISUPUSRDEFCRTTXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.preserveKey: true
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory:  #M 
@EndUserText.label: 'Supplier Evaluation User Defined Criteria - Text' 
@AccessControl.personalData.blocking: #NOT_REQUIRED 
//@ObjectModel.representativeKey: 'SupplierClassification' 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [  #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]

define view I_SuplrEvalUsrDfndCriteriaText
  as select from mmpur_ana_crttxt

  association [1..1] to I_SuplrEvalUserDefinedCriteria as _Userdefinedcriteria on _Userdefinedcriteria.SuplrEvalUserDefinedCriteria = $projection.SuplrEvalUserDefinedCriteria
  association [1..1] to I_Language                     as _Language            on _Language.Language = $projection.Language
{
      //MMPUR_ANA_CRTTXT
  key criterion_id  as SuplrEvalUserDefinedCriteria,
  key language as Language,
      critrion_desc as SuplrEvalUserDfndCriteriaDesc,

      _Userdefinedcriteria,
      _Language
}
```
