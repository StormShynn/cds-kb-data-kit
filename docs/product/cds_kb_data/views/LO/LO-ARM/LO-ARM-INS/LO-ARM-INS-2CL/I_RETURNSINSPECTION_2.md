---
name: I_RETURNSINSPECTION_2
description: "Returnsinspection 2"
app_component: LO-ARM-INS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-ARM
  - LO-ARM-INS
  - interface-view
  - inspection
  - component:LO-ARM-INS-2CL
  - lob:Logistics General
---
# I_RETURNSINSPECTION_2

**Returnsinspection 2**

| Property | Value |
|---|---|
| App Component | `LO-ARM-INS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReturnsInspection` | ✓ | |  | `InspectionDocument` |  |  |
| `ReturnsDelivery` |  | |  | `DeliveryDocument` |  |  |
| `ReturnsDeliveryItem` |  | |  | `DeliveryDocumentItem` |  |  |
| `RetsMgmtProcess` |  | |  |  |  |  |
| `RetsMgmtInspPubgSts` |  | |  |  |  |  |
| `InspectionDocumentIsCancelled` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |

## Source Code

```abap
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Returns Inspection'
@ObjectModel: {
  representativeKey        : 'ReturnsInspection',
  sapObjectNodeType.name   : 'ReturnsInspection', 
  modelingPattern          : #NONE,
  supportedCapabilities    : [#CDS_MODELING_DATA_SOURCE,
                              #CDS_MODELING_ASSOCIATION_TARGET,
                              #SQL_DATA_SOURCE,
                              #EXTRACTION_DATA_SOURCE ],
  usageType: {
    serviceQuality: #B,
    dataClass:      #TRANSACTIONAL,
    sizeCategory:   #L
  }
}
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@Analytics.internalName:#LOCAL 
@Analytics.dataExtraction.enabled: true

define view entity I_ReturnsInspection_2
  as select from I_InspectionOutcomeBasic as ReturnsInspection
    inner join  I_DeliveryDocument        as _ReturnsDeliveryHeader on _ReturnsDeliveryHeader.DeliveryDocument = ReturnsInspection.DeliveryDocument
                                                                    and _ReturnsDeliveryHeader.SDDocumentCategory = 'T'
{
  key  ReturnsInspection.InspectionDocument   as ReturnsInspection,
       ReturnsInspection.DeliveryDocument     as ReturnsDelivery,
       ReturnsInspection.DeliveryDocumentItem as ReturnsDeliveryItem,
       ReturnsInspection.RetsMgmtProcess,
       ReturnsInspection.RetsMgmtInspPubgSts,
       @Semantics.booleanIndicator: true
       ReturnsInspection.InspectionDocumentIsCancelled,
       ReturnsInspection.CreatedByUser,
       ReturnsInspection.CreationDateTime,
       ReturnsInspection.LastChangedByUser,
       ReturnsInspection.LastChangeDateTime
}
where ReturnsInspection.DeliveryDocument is not initial
  and ReturnsInspection.DeliveryDocumentItem is not initial
```
