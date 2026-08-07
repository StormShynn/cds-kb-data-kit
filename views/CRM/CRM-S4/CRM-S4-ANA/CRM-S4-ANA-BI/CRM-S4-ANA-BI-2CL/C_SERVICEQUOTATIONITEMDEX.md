---
name: C_SERVICEQUOTATIONITEMDEX
description: Servicequotationitemdex
app_component: CRM-S4-ANA-BI-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - consumption-view
  - data-extraction
  - service
  - item-level
  - component:CRM-S4-ANA-BI-2CL
  - lob:Other
---
# C_SERVICEQUOTATIONITEMDEX

**Servicequotationitemdex**

| Property | Value |
|---|---|
| App Component | `CRM-S4-ANA-BI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceObjectType` | ✓ | |  |  |  |  |
| `ServiceDocument` | ✓ | |  |  |  |  |
| `ServiceDocumentItem` | ✓ | |  |  |  |  |
| `ServiceDocumentType` |  | |  |  |  |  |
| `ServiceDocumentItemDescription` |  | |  |  |  |  |
| `ServiceDocumentItemIsRejected` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `RespEmployeeBusinessPartnerId` |  | |  | `ResponsibleEmployee` |  |  |
| `RespyMgmtGlobalTeamID` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `ServiceDocumentItemQuantity` |  | |  |  |  |  |
| `ServiceDocItemQuantityUnit` |  | |  |  |  |  |
| `ServiceDuration` |  | |  |  |  |  |
| `ServiceDurationUnit` |  | |  |  |  |  |
| `ServiceDocumentItemIsQuotation` |  | |  |  |  |  |
| `TimeSheetOvertimeCategory` |  | |  |  |  |  |
| `ServiceDocumentItemStatus` |  | |  |  |  |  |
| `ServiceDocItemCategory` |  | |  |  |  |  |
| `ServiceDocItemGrossAmount` |  | |  |  |  |  |
| `ServiceDocumentItemNetAmount` |  | |  |  |  |  |
| `ServiceDocumentItemTaxAmount` |  | |  |  |  |  |
| `ServiceDocItemRejectionReason` |  | |  |  |  |  |
| `ParentServiceQuotationItem` |  | |  | `ServiceDocumentItem` |  |  |
| `ServiceDocumentItemObjectType` |  | |  |  |  |  |
| `ReferenceServiceContract` |  | |  | `ServiceDocument` |  |  |
| `ReferenceServiceContractItem` |  | |  | `ServiceDocumentItem` |  |  |
| `SerialNumber` |  | |  |  |  |  |
| `Equipment` |  | |  |  |  |  |
| `SrvcQtanItemFunctionalLocation` |  | |  | `cast ( ServiceQtanItemRefObj.FunctionalLocation as functionallocation preserving type )` |  |  |
| `ProductID` |  | |  |  |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocItemExt` | `E_ServiceDocumentItem` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Data Extraction for Srvc Quotation Item'
@VDM: {
  viewType: #CONSUMPTION
  // lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Analytics: {
  technicalName: 'CSRVCQTANITMDEX',
  dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                   filter: [{operator: #EQ, tableElement: 'objtype_h', value: 'BUS2000116'}],
                    table: 'crms4d_serv_i', role: #MAIN,
                    viewElement: ['ServiceObjectType', 'ServiceDocument', 'ServiceDocumentItem'],
                    tableElement: ['objtype_h', 'object_id', 'number_int']
                },
                {
                    filter: [{operator: #EQ, tableElement: 'objtype_h', value: 'BUS2000116'}],
                    table: 'crms4d_refobj', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['ServiceObjectType', 'ServiceDocument'],
                    tableElement: ['objtype_h', 'object_id']
                } ]  }   }   }

@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@ObjectModel: {
  representativeKey: 'ServiceDocumentItem',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #D,
     sizeCategory:   #XL
   },
   supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
}

@ObjectModel.sapObjectNodeType.name: 'ServiceQuotationItem'
@Metadata.ignorePropagatedAnnotations: true

define view entity C_ServiceQuotationItemDEX
  as select from           I_ServiceDocumentItemEnhcd     as ServiceQuotationItem
    left outer to one join I_ServiceDocumentRefObject     as ServiceQtanItemRefObj      on  ServiceQtanItemRefObj.ServiceObjectType      = 'BUS2000116'
                                                                                        and ServiceQtanItemRefObj.ServiceDocument        = ServiceQuotationItem.ServiceDocument
                                                                                        and ServiceQtanItemRefObj.ServiceDocumentItem    = ServiceQuotationItem.ServiceDocumentItem
                                                                                        and ServiceQtanItemRefObj.SrvcRefObjIsMainObject = 'X'

    left outer to one join I_ServiceDocumentItemPrdcssr_2 as ServiceDocumentItemPrdcssr on  ServiceQuotationItem.ServiceDocumentItemCharUUID   = ServiceDocumentItemPrdcssr.ServiceDocumentItemCharUUID
                                                                                        and ServiceQuotationItem.ServiceDocumentItemObjectType = ServiceDocumentItemPrdcssr.ServiceDocumentItemObjectType
                                                                                        and ServiceQuotationItem.ServiceDocumentItemObjectType = 'BUS2000137'

  association [0..1] to E_ServiceDocumentItem as _ServiceDocItemExt on  $projection.ServiceObjectType   = _ServiceDocItemExt.ServiceCategory
                                                                    and $projection.ServiceDocument     = _ServiceDocItemExt.ServiceOrderItem
                                                                    and $projection.ServiceDocumentItem = _ServiceDocItemExt.ServiceLineExternalID



{
      /* Service Order Item Keys  */
      @ObjectModel.foreignKey.association: '_ServiceObjType'
  key ServiceQuotationItem.ServiceObjectType,
  key ServiceQuotationItem.ServiceDocument,
  key ServiceQuotationItem.ServiceDocumentItem,
      //      ServiceQuotationItem.ServiceDocumentItemUUID,
      //      ServiceQuotationItem.ServiceDocumentItemCharUUID,
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceQuotationItem.ServiceDocumentType,
      ServiceQuotationItem.ServiceDocumentItemDescription,
      
      @Semantics.booleanIndicator: true
      ServiceQuotationItem.ServiceDocumentItemIsRejected,
      
      ServiceQuotationItem.SoldToParty,
      ServiceQuotationItem.ShipToParty,
      ServiceQuotationItem.ResponsibleEmployee                         as RespEmployeeBusinessPartnerId,
      ServiceQuotationItem._ServiceTeamHeader.RespyMgmtGlobalTeamID,

      /* Organizational units with the S/4 SD codes */
      ServiceQuotationItem.SalesOrganization,
      ServiceQuotationItem.DistributionChannel,
      ServiceQuotationItem.Division,
      ServiceQuotationItem.SalesOffice,
      ServiceQuotationItem.SalesGroup,

      @ObjectModel.foreignKey.association: '_PaymentTerms'
      ServiceQuotationItem.PaymentTerms,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      ServiceQuotationItem.TransactionCurrency,
      ServiceQuotationItem.Product,
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      ServiceQuotationItem.ServiceDocumentItemQuantity,
      @ObjectModel.foreignKey.association: '_SalesUnit'
      ServiceQuotationItem.ServiceDocItemQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'ServiceDurationUnit'
      ServiceQuotationItem.ServiceDuration,
      ServiceQuotationItem.ServiceDurationUnit,
      @Semantics.booleanIndicator: true
      ServiceQuotationItem.ServiceDocumentItemIsQuotation,
      @ObjectModel.foreignKey.association: '_ServiceDocOvertimeCat'
      ServiceQuotationItem.TimeSheetOvertimeCategory,
      @ObjectModel.foreignKey.association: '_SrvcDocItmLifecycleStatus'
      ServiceQuotationItem.ServiceDocumentItemStatus,
      @ObjectModel.foreignKey.association: '_ServiceDocItemCategory'
      ServiceQuotationItem.ServiceDocItemCategory,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceQuotationItem.ServiceDocItemGrossAmount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceQuotationItem.ServiceDocumentItemNetAmount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceQuotationItem.ServiceDocumentItemTaxAmount,
      @ObjectModel.foreignKey.association: '_ServiceDocItemRejectionReason'
      ServiceQuotationItem.ServiceDocItemRejectionReason,
      ServiceQuotationItem._ParentServiceDocItem_2.ServiceDocumentItem as ParentServiceQuotationItem,
      //@ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceQuotationItem.ServiceDocumentItemObjectType,
      ServiceDocumentItemPrdcssr._ServiceDocItm.ServiceDocument        as ReferenceServiceContract,
      ServiceDocumentItemPrdcssr._ServiceDocItm.ServiceDocumentItem    as ReferenceServiceContractItem,


      /* Reference Object Details */
      //ServiceQtanItemRefObj.SrvcRefObjIsMainObject,
      ServiceQtanItemRefObj.SerialNumber,
      ServiceQtanItemRefObj.Equipment,
      cast ( ServiceQtanItemRefObj.FunctionalLocation as functionallocation preserving type )                         as SrvcQtanItemFunctionalLocation,
      ServiceQtanItemRefObj.ProductID,

      ServiceQuotationItem._ServiceObjType,
      ServiceQuotationItem._ServiceDocumentType,
      ServiceQuotationItem._PaymentTerms,
      ServiceQuotationItem._TransactionCurrency,
      ServiceQuotationItem._SalesUnit,
      ServiceQuotationItem._ServiceDocOvertimeCat,
      ServiceQuotationItem._ServiceDocItemCategory,
      ServiceQuotationItem._SrvcDocItmLifecycleStatus,
      ServiceQuotationItem._ServiceDocItemRejectionReason
}
where
      ServiceQuotationItem.ServiceObjectType              = 'BUS2000116'
  and ServiceQuotationItem.ServiceDocumentItemIsQuotation = 'X'
```
