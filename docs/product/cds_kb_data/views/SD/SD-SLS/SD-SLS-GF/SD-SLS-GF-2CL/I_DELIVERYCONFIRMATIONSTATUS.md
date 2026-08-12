---
name: I_DELIVERYCONFIRMATIONSTATUS
description: "Deliveryconfirmationstatus"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_DELIVERYCONFIRMATIONSTATUS

**Deliveryconfirmationstatus**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeliveryConfirmationStatus` | ✓ | |  | `substring(dd07l.domvalue_l, 1, 1)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_DeliveryConfirmationStatusT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'DeliveryConfirmationStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Delivery Confirmation Status'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDDELIVCONFSTS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE,
                                        #ANALYTICAL_DIMENSION  ]
@ObjectModel.sapObjectNodeType.name: 'SalesDocDeliveryConfSts'                                        
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_DeliveryConfirmationStatus
as select from dd07l

association [0..*] to I_DeliveryConfirmationStatusT as _Text on $projection.DeliveryConfirmationStatus = _Text.DeliveryConfirmationStatus
{
    @ObjectModel.text.association: '_Text'    
    key substring(dd07l.domvalue_l, 1, 1) as DeliveryConfirmationStatus,
    
    _Text
}
where (dd07l.domname = 'STATV') and (dd07l.as4local = 'A');
```
