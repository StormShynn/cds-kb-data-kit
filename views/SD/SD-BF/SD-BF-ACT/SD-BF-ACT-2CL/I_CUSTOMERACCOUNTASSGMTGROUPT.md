---
name: I_CUSTOMERACCOUNTASSGMTGROUPT
description: Customeraccountassgmtgroupt
app_component: SD-BF-ACT-2CL
software_component: SAPSCORE
release_state: released
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
# I_CUSTOMERACCOUNTASSGMTGROUPT

**Customeraccountassgmtgroupt**

| Property | Value |
|---|---|
| App Component | `SD-BF-ACT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CustomerAccountAssignmentGroup` | `ktgrd` |
| key `Language` | `spras` |
| `CustomerAccountAssgmtGrpName` | `vtext` |
| `_CustomerAccountAssgmtGroup` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustomerAccountAssgmtGroup` | `I_CustomerAccountAssgmtGroup` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CustomerAccountAssignmentGroup'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S 
@ObjectModel.modelingPattern:         #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY,
                                      #EXTRACTION_DATA_SOURCE ]
@EndUserText.label: 'Account Assignment Group of Customer - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDCUSACCASSGRPT'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.preserveKey:true 
@Metadata.ignorePropagatedAnnotations:true 
@Search.searchable: true

define view I_CustomerAccountAssgmtGroupT
as
select from tvktt
association [0..1] to I_CustomerAccountAssgmtGroup as _CustomerAccountAssgmtGroup on $projection.CustomerAccountAssignmentGroup = _CustomerAccountAssgmtGroup.CustomerAccountAssignmentGroup
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_CustomerAccountAssgmtGroup'
    key ktgrd as CustomerAccountAssignmentGroup,
    
    @Semantics.language
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #LOW    
    @Semantics.text
    vtext as CustomerAccountAssgmtGrpName,
    
    _CustomerAccountAssgmtGroup,
    _Language
};
```
