---
name: I_CUSTOMERPAYTGUARPROCED
description: "Customerpaytguarproced"
app_component: SD-BF-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-CM
  - interface-view
  - customer
  - component:SD-BF-CM-2CL
  - lob:Sales & Distribution
  - bo:Customer
---
# I_CUSTOMERPAYTGUARPROCED

**Customerpaytguarproced**

| Property | Value |
|---|---|
| App Component | `SD-BF-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerPaytGuarProced` | ✓ | |  | `kabss` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CustomerPaytGuarProcedT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'CustomerPaytGuarProced'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@EndUserText.label: 'Customer Payment Guarantee Procedure'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDCUSTPAYTGUARP'
@AbapCatalog.compiler.compareFilter: true
@Search.searchable: true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'CustomerPaymentGuaranteeProced'

define view I_CustomerPaytGuarProced 
as select from t691p 

association[0..*] to I_CustomerPaytGuarProcedT as _Text on $projection.CustomerPaytGuarProced = _Text.CustomerPaytGuarProced
{
    @Search.defaultSearchElement: true
    @ObjectModel.text.association: '_Text'
    @EndUserText.label: 'Payment Guarantee Procedure'
    key kabss as CustomerPaytGuarProced,
    
    //Association
    _Text
};
```
