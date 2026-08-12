---
name: I_CUSTOMERACCOUNTASSGMTGROUP
description: "Customeraccountassgmtgroup"
app_component: SD-BF-ACT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-ACT
  - interface-view
  - customer
  - component:SD-BF-ACT-2CL
  - lob:Sales & Distribution
  - bo:Customer
---
# I_CUSTOMERACCOUNTASSGMTGROUP

**Customeraccountassgmtgroup**

| Property | Value |
|---|---|
| App Component | `SD-BF-ACT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerAccountAssignmentGroup` | ✓ | |  | `ktgrd` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CustomerAccountAssgmtGroupT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.sapObjectNodeType.name: 'CustomerAccountAssignmentGroup'
@ObjectModel.representativeKey: 'CustomerAccountAssignmentGroup'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern:         #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #VALUE_HELP_PROVIDER,
                                      #SEARCHABLE_ENTITY,
                                      #EXTRACTION_DATA_SOURCE ]
@EndUserText.label: 'Customer Account Assignment Group'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDCUSACCASSGRP'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.preserveKey:true 
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true 
@Consumption.ranked: true

define view I_CustomerAccountAssgmtGroup
as select from
tvkt
association [0..*] to I_CustomerAccountAssgmtGroupT as _Text on $projection.CustomerAccountAssignmentGroup = _Text.CustomerAccountAssignmentGroup
{
    @ObjectModel.text.association: '_Text'
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 1.0    
    @Search.ranking: #HIGH    
    key ktgrd as CustomerAccountAssignmentGroup,
    
    _Text
};
```
