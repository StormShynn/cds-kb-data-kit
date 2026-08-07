---
name: I_DUNNINGBLOCKINGREASONCODE
description: Dunningblockingreasoncode
app_component: FI-AR-AR-C-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AR
  - FI-AR-AR
  - interface-view
  - component:FI-AR-AR-C-2CL
  - lob:Finance
---
# I_DUNNINGBLOCKINGREASONCODE

**Dunningblockingreasoncode**

| Property | Value |
|---|---|
| App Component | `FI-AR-AR-C-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DunningBlockingReason` | ✓ | |  | `cast( mansp as farp_mansp preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_DunningBlockingReasonText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Dunning Blocking Reason Code'
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIDUNBLOCKREAS'
@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'DunningBlockingReason'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ]
@Search.searchable: true
@ObjectModel.sapObjectNodeType.name: 'DunningBlockingReason'
@Analytics.dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
        }
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_DunningBlockingReasonCode
  as select from t040s
  association [0..*] to I_DunningBlockingReasonText as _Text on $projection.DunningBlockingReason = _Text.DunningBlockingReason
{
      @Search: { defaultSearchElement: true,
                 fuzzinessThreshold:   0.8 }
      @ObjectModel.text.association: '_Text'
  key cast( mansp as farp_mansp preserving type ) as DunningBlockingReason,
      // DunningBlockingReason_Code_ is deprecated
      // use DunningBlockingReason instead
      //   cast( mansp as FARP_MANSP )     as DunningBlockingReasonCode,
      _Text

};
```
