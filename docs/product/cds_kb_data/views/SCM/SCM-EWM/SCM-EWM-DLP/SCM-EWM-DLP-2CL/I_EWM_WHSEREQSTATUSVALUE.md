---
name: I_EWM_WHSEREQSTATUSVALUE
description: "This CDS view enables you to view all available status values and combinations of status value und status type for warehouse requests. With the related text view, you can also view the descriptions of the status values and the combinations of status value and status type. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEREQSTATUSVALUE')/$value
semantic_en: "This CDS view enables you to view all available status values and combinations of status value und status type for warehouse requests. With the related text view, you can also view the descriptions of the status values and the combinations of status value and status type. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Warehouse Request Status Value — CDS view giao diện (master data) dựa trên Warehouse Request Status Value."
keywords:
  - "warehouse"
  - "request"
  - "status"
  - "value"
  - "type"
  - "whse"
  - "custom"
  - "system"
  - "reference"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-DLP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-DLP
  - SCM-EWM-DLP-2CL
---
# I_EWM_WHSEREQSTATUSVALUE

**This CDS view enables you to view all available status values and combinations of status value und status type for warehouse requests. With the related text view, you can also view the descriptions of the status values and the combinations of status value and status type. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEREQSTATUSVALUE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouseRequestStatusType` | ✓ | |  | `status_type` | `CHAR(5)` | Status Type |
| `EWMWarehouseRequestStatus` | ✓ | |  | `status_value` | `CHAR(1)` | Status Value |
| `EWMWhseReqCustomRefStatus` |  | |  | `reference_custom` | `CHAR(5)` | Custom reference to ISTAT in TJ02T |
| `EWMWhseReqSystemRefStatus` |  | |  | `reference_system` | `CHAR(5)` | System reference to ISTAT in TJ02T |
| `EWMWhseReqReferenceStatus` |  | |  | `reference` | `CHAR(5)` | Reference to ISTAT in TJ02T |
| `_Text` | | ✓ | | | | |
| `_StatusType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_EWM_WhseReqStatusValueText` | [0..*] |
| `_StatusType` | `I_EWM_WhseReqStatusType` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEREQSTATUSVALUE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEREQSTATUSVALUE')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warehouse Request Status Value'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType:#BASIC
@ObjectModel: {
  modelingPattern: #NONE,
  compositionRoot: true,
  usageType:{
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #MASTER
  },
  representativeKey: 'EWMWarehouseRequestStatus',
  supportedCapabilities: [ #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SEARCHABLE_ENTITY,
                           #ANALYTICAL_DIMENSION ]
}
@Search.searchable: true
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL 
define view entity I_EWM_WhseReqStatusValue
  as select from /scdl/stsval
  association [0..*] to I_EWM_WhseReqStatusValueText as _Text       on  $projection.EWMWarehouseRequestStatusType = _Text.EWMWarehouseRequestStatusType
                                                                    and $projection.EWMWarehouseRequestStatus     = _Text.EWMWarehouseRequestStatus
  association [1..1] to I_EWM_WhseReqStatusType      as _StatusType on  $projection.EWMWarehouseRequestStatusType = _StatusType.EWMWarehouseRequestStatusType
{
      @ObjectModel.foreignKey.association: '_StatusType'
  key status_type      as EWMWarehouseRequestStatusType,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key status_value     as EWMWarehouseRequestStatus,
      reference_custom as EWMWhseReqCustomRefStatus,
      reference_system as EWMWhseReqSystemRefStatus,
      reference        as EWMWhseReqReferenceStatus,
      _StatusType,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text

}
```
