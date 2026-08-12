---
name: I_SUPLREVALUSERDEFINEDCRITERIA
description: "Suplrevaluserdefinedcriteria"
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
# I_SUPLREVALUSERDEFINEDCRITERIA

**Suplrevaluserdefinedcriteria**

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
| `CreatedByUser` |  | |  | `createdby` |  |  |
| `CreationDate` |  | |  | `createdon` |  |  |
| `LastChangedByUserDescription` |  | |  | `lastchangeby` |  |  |
| `LastChangeDate` |  | |  | `lastchangeon` |  |  |
| `WeightingFactor` |  | |  | `weighting` |  |  |
| `_userdefinedcriteriaText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_userdefinedcriteriaText` | `I_SuplrEvalUsrDfndCriteriaText` | [1..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@AbapCatalog.sqlViewName: 'ISUPUSRDEFCRT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory:  #S 
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label:'Supplier Evaluation Usr Defined Criteria'
@AccessControl.personalData.blocking: #NOT_REQUIRED 
//@ObjectModel.representativeKey: 'SupplierClassification' 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'SuplrEvalUserDefinedCriteria' 
@ObjectModel.supportedCapabilities: [  #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]

define view I_SuplrEvalUserDefinedCriteria
  as select from mmpur_ana_usrcrt as _userdefinedcriteria

  association [1..*] to I_SuplrEvalUsrDfndCriteriaText as _userdefinedcriteriaText on _userdefinedcriteria.criterion_id = _userdefinedcriteriaText.SuplrEvalUserDefinedCriteria

{
  key criterion_id     as SuplrEvalUserDefinedCriteria,   
     createdby        as CreatedByUser,
      createdon        as CreationDate,
      lastchangeby     as LastChangedByUserDescription,
      lastchangeon     as LastChangeDate,
      weighting as WeightingFactor,
      _userdefinedcriteriaText
}
where
  is_active = 'X'
```
