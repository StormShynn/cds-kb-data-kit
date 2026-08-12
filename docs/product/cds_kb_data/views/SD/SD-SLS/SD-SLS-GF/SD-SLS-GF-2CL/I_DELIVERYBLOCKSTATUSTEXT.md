---
name: I_DELIVERYBLOCKSTATUSTEXT
description: "Deliveryblockstatustext"
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
  - text-view
  - delivery
  - text
  - status
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_DELIVERYBLOCKSTATUSTEXT

**Deliveryblockstatustext**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeliveryBlockStatus` | ✓ | |  | `statu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `DeliveryBlockStatusDesc` |  | |  | `bezei` |  |  |
| `_DeliveryBlockStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DeliveryBlockStatus` | `I_DeliveryBlockStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'DeliveryBlockStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Delivery Block Status - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDDELIVBLKSTST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #EXTRACTION_DATA_SOURCE  ]
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_DeliveryBlockStatusText
as select from tvbst

association[0..1] to I_DeliveryBlockStatus as _DeliveryBlockStatus on $projection.DeliveryBlockStatus = _DeliveryBlockStatus.DeliveryBlockStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_DeliveryBlockStatus'
    key statu as DeliveryBlockStatus,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,   
    
    @Semantics.text: true
    bezei as DeliveryBlockStatusDesc,
    
    //Associations
    _DeliveryBlockStatus,
    _Language
}
where (tvbst.tbnam = 'VBAP') and (tvbst.fdnam = 'LSSTA')
  and ((tvbst.statu = '') or (tvbst.statu = 'B') or (tvbst.statu = 'C'));
```
