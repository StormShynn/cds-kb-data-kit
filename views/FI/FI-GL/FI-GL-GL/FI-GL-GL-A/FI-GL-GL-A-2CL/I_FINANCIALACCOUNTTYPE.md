---
name: I_FINANCIALACCOUNTTYPE
description: Financialaccounttype
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_FINANCIALACCOUNTTYPE

**Financialaccounttype**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `FinancialAccountType` | `cast( substring( domvalue_l, 1, 1) as farp_koart )` |
| `DomainValue` | `dd07l.domvalue_l` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FinancialAccountTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @EndUserText.label: 'Financial Account Type'
@Analytics.technicalName: 'IFIACCOUNTTYPE' 
@VDM.viewType: #BASIC
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@ObjectModel: { representativeKey: 'FinancialAccountType',
                usageType.sizeCategory: #S,
                usageType.dataClass:  #MASTER,
                usageType.serviceQuality: #A,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY],
                modelingPattern: #ANALYTICAL_DIMENSION }                   
@Metadata.ignorePropagatedAnnotations: true  
@AccessControl.authorizationCheck: #CHECK
@Metadata.allowExtensions:true
@ObjectModel.sapObjectNodeType.name: 'FinancialAccountType'
@Search.searchable: true

define view entity I_FinancialAccountType
as select from
dd07l
association [0..*] to I_FinancialAccountTypeText as _Text on $projection.FinancialAccountType = _Text.FinancialAccountType
{
  @ObjectModel.text.association: '_Text'
  key  cast( substring( domvalue_l, 1, 1) as farp_koart ) as FinancialAccountType,  
  @Analytics.hidden: true
  @Consumption.hidden: true
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  dd07l.domvalue_l as DomainValue,  
  _Text
}
where 
  dd07l.domname = 'FARP_KOART' and   dd07l.as4local = 'A';
```
