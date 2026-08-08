---
name: I_CUSTOMERPAYTGUARPROCEDT
description: "Customerpaytguarprocedt"
app_component: SD-BF-CM-2CL
software_component: SAPSCORE
release_state: released
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
# I_CUSTOMERPAYTGUARPROCEDT

**Customerpaytguarprocedt**

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
| `Language` | ✓ | |  | `spras` |  |  |
| `CustomerPaytGuarProcedName` |  | |  | `bezei` |  |  |
| `_CustomerPaytGuarProced` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustomerPaytGuarProced` | `I_CustomerPaytGuarProced` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CustomerPaytGuarProced'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Cust Payment Guarantee Procedure - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDCUSTPAYTGUAPT'
@AbapCatalog.compiler.compareFilter: true
@Search.searchable: true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Metadata.ignorePropagatedAnnotations:true

define view I_CustomerPaytGuarProcedT 
as select from t691q 

association[0..1] to I_CustomerPaytGuarProced as _CustomerPaytGuarProced on $projection.CustomerPaytGuarProced = _CustomerPaytGuarProced.CustomerPaytGuarProced
association[0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{
    @ObjectModel.sapObjectNodeTypeReference: 'CustomerPaymentGuaranteeProced'
    @ObjectModel.foreignKey.association: '_CustomerPaytGuarProced'
    @EndUserText.label: 'Payment Guarantee Procedure'
    key kabss    as CustomerPaytGuarProced,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras    as Language,
    
    @Search.defaultSearchElement: true
    @Semantics.text: true
    @EndUserText.label: 'Description'
    bezei        as CustomerPaytGuarProcedName,
    
    //Association
    _CustomerPaytGuarProced,
    _Language        
};
```
