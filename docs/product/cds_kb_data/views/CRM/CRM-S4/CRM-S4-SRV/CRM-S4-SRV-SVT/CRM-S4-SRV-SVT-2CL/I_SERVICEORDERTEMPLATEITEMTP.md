---
name: I_SERVICEORDERTEMPLATEITEMTP
description: "Service OrderTEMPLATEITEMTP"
app_component: CRM-S4-SRV-SVT-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - service
  - service-order
  - item-level
  - component:CRM-S4-SRV-SVT-2CL
  - lob:Other
---
# I_SERVICEORDERTEMPLATEITEMTP

**Service OrderTEMPLATEITEMTP**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceOrderTemplate` | ✓ | |  |  |  |  |
| `ServiceOrderTemplateItem` | ✓ | |  |  |  |  |
| `ServiceOrderTemplateItemUUID` |  | |  |  |  |  |
| `SrvcOrdTmplItmDescription` |  | |  |  |  |  |
| `ServiceObjectType` |  | |  |  |  |  |
| `SrvcOrdTmplItmCategory` |  | |  |  |  |  |
| `ServiceDocumentItemObjectType` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `SrvcOrdTmplItmValdtyStrtDteTme` |  | |  |  |  |  |
| `SrvcOrdTmplItmValdtyEndDteTme` |  | |  |  |  |  |
| `ServiceDocItemChangedDateTime` |  | |  |  |  |  |
| `ServiceDocItemCreationDateTime` |  | |  |  |  |  |
| `ServiceDocItemCreatedByUser` |  | |  |  |  |  |
| `ServiceDocItemChangedByUser` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `Quantity` |  | |  |  |  |  |
| `QuantityUnit` |  | |  |  |  |  |
| `ParentServiceOrderTemplateItem` |  | |  |  |  |  |
| `SrvcOrdTmplItmIsNew` |  | |  |  |  |  |
| `SrvcOrdTmplItmIsInProcess` |  | |  |  |  |  |
| `SrvcOrdTmplItmIsReleased` |  | |  |  |  |  |
| `SrvcOrdTmplItmIsCompleted` |  | |  |  |  |  |
| `SrvcDocItmPartReferenceItem` |  | |  |  |  |  |
| `SrvcDocItmApptReferenceItem` |  | |  |  |  |  |
| `SrvcDocItmApptRefObjectUUID` |  | |  |  |  |  |
| `_ServiceObjType` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_SrvcOrdTmplItmStatus` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ServiceOrderTemplateTP` | | ✓ | | | | |
| `_SrvcOrdTmplItmRefObjectTP` | | ✓ | | | | |
| `_SrvcOrdTmplItemUserStatusTP` | | ✓ | | | | |
| `_SrvcOrdTmplItemLongTextTP` | | ✓ | | | | |
| `_SrvcOrdTmplItemAppointmentTP` | | ✓ | | | | |
| `_SrvcOrdTmplItemDurationTP` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Service Order Template Item - TP'
@AccessControl.authorizationCheck: #MANDATORY

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.usageType: { dataClass:      #TRANSACTIONAL,
                          serviceQuality: #C,
                          sizeCategory:   #L }

@Metadata.ignorePropagatedAnnotations: true
define view entity I_ServiceOrderTemplateItemTP
  as projection on R_ServiceOrderTemplateItemTP as _ServiceOrderTemplateItemTP
{
      // Administrative Fields
      @ObjectModel.foreignKey.association: '_ServiceDocument'
  key ServiceOrderTemplate,
  key ServiceOrderTemplateItem,

      ServiceOrderTemplateItemUUID,
      SrvcOrdTmplItmDescription,
      //@Consumption.valueHelpDefinition:[{ entity: { name: 'I_ServiceDocumentTypeStdVH', element: 'ServiceObjectType' },  useAsTemplate: true}] - not C1 released
      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceObjectType,
      //@Consumption.valueHelpDefinition:[{ entity: { name: 'I_SrvcDocItemCategoryStdVH', element: 'ServiceDocItemCategory' },  useAsTemplate: true}] - not C1 released
      @ObjectModel.sapObjectNodeTypeReference: 'ServiceDocumentItemCategory'
      SrvcOrdTmplItmCategory,

      ServiceDocumentItemObjectType,
      Language,

      @Semantics.dateTime:true
      SrvcOrdTmplItmValdtyStrtDteTme,

      @Semantics.dateTime:true
      SrvcOrdTmplItmValdtyEndDteTme,

      @Semantics.dateTime:true
      ServiceDocItemChangedDateTime,

      @Semantics.dateTime:true
      ServiceDocItemCreationDateTime,

      //RespEmployeeBusinessPartnerId,

      ServiceDocItemCreatedByUser,
      ServiceDocItemChangedByUser,
      //@Consumption.valueHelpDefinition:[{ entity: { name: 'I_ProductStdVH', element: 'Product' },  useAsTemplate: true}]
      @ObjectModel.foreignKey.association: '_Product'
      Product,
      //@Consumption.valueHelpDefinition:[{ entity: { name: 'I_UnitOfMeasureStdVH', element: 'QuantityUnit'  },  useAsTemplate: true}]
      @Semantics: { quantity : {unitOfMeasure: 'QuantityUnit'} }
      Quantity,
      QuantityUnit,


      ParentServiceOrderTemplateItem,
      // Status
      SrvcOrdTmplItmIsNew,
      SrvcOrdTmplItmIsInProcess,
      SrvcOrdTmplItmIsReleased,
      SrvcOrdTmplItmIsCompleted,


      //Inheritance of complex set
      SrvcDocItmPartReferenceItem,
      SrvcDocItmApptReferenceItem,
      SrvcDocItmApptRefObjectUUID,

      //Associations
      _ServiceObjType,
      _ServiceDocument,
      _SrvcOrdTmplItmStatus,
      _Product,
      /* Compositions */

      _ServiceOrderTemplateTP       : redirected to parent I_ServiceOrderTemplateTP,
      _SrvcOrdTmplItmRefObjectTP    : redirected to composition child I_SrvcOrdTmplItmRefObjectTP,
      _SrvcOrdTmplItemUserStatusTP  : redirected to composition child I_SrvcOrdTmplItemUserStatusTP,
      _SrvcOrdTmplItemLongTextTP    : redirected to composition child I_SrvcOrdTmplItemLongTextTP,
      _SrvcOrdTmplItemAppointmentTP : redirected to composition child I_SrvcOrdTmplItemAppointmentTP,
      _SrvcOrdTmplItemDurationTP    : redirected to composition child I_SrvcOrdTmplItemDurationTP
}
```
