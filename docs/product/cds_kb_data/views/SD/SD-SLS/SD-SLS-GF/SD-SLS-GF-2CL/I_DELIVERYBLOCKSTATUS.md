---
name: I_DELIVERYBLOCKSTATUS
description: "Deliveryblockstatus"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - delivery
  - status
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_DELIVERYBLOCKSTATUS

**Deliveryblockstatus**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeliveryBlockStatus` | ✓ | |  | `substring(dd07l.domvalue_l, 1, 1)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_DeliveryBlockStatusText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'DeliveryBlockStatus'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS
@EndUserText.label: 'Delivery Block Status'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDDELIVBLKSTS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #VALUE_HELP_PROVIDER, 
                                        #EXTRACTION_DATA_SOURCE,
                                        #ANALYTICAL_DIMENSION  ]
@ObjectModel.sapObjectNodeType.name: 'SalesDocDeliveryBlockStatus'                                        
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_DeliveryBlockStatus
as select from dd07l

association [0..*] to I_DeliveryBlockStatusText as _Text on $projection.DeliveryBlockStatus = _Text.DeliveryBlockStatus
{
    @ObjectModel.text.association: '_Text'
    key substring(dd07l.domvalue_l, 1, 1) as DeliveryBlockStatus,
    
    //Associations
    _Text
}
where (dd07l.domname = 'STATV') and (dd07l.as4local = 'A')
  and ((dd07l.domvalue_l = '') or (dd07l.domvalue_l = 'B') or (dd07l.domvalue_l = 'C'));
```
