---
name: C_SERVICEQUOTATIONDEX
description: "Servicequotationdex"
app_component: CRM-S4-ANA-BI-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - consumption-view
  - data-extraction
  - service
  - component:CRM-S4-ANA-BI-2CL
  - lob:Other
---
# C_SERVICEQUOTATIONDEX

**Servicequotationdex**

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
| `ServiceDocumentDescription` |  | |  |  |  |  |
| `RequestedServiceStartDateTime` |  | |  |  |  |  |
| `RequestedServiceEndDateTime` |  | |  |  |  |  |
| `SrvcQtanValidityStartDateTime` |  | |  |  |  |  |
| `SrvcQtanValidityEndDateTime` |  | |  |  |  |  |
| `ServiceDocumentIsReleased` |  | |  |  |  |  |
| `ServiceDocumentIsOpen` |  | |  |  |  |  |
| `ServiceDocumentIsRejected` |  | |  |  |  |  |
| `ServiceDocumentStatus` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `ContactPersonBusinessPartnerId` |  | |  | `ContactPerson` |  |  |
| `RespyMgmtGlobalTeamID` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `ServiceDocumentRejectionReason` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `ServiceDocGrossAmount` |  | |  |  |  |  |
| `ServiceDocNetAmount` |  | |  |  |  |  |
| `ServiceDocTaxAmount` |  | |  |  |  |  |
| `ReferenceInHouseRepair` |  | |  |  |  |  |
| `ServiceDocumentType` |  | |  |  |  |  |
| `SerialNumber` |  | |  |  |  |  |
| `Equipment` |  | |  |  |  |  |
| `SrvcQtanFunctionalLocation` |  | |  | `cast ( ServiceQtanRefObj.FunctionalLocation as functionallocation preserving type )` |  |  |
| `ProductID` |  | |  |  |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocumentExt` | `E_ServiceDocument` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Data Extraction for Service Quotation'
@VDM: {
  viewType: #CONSUMPTION
  // lifecycle.contract.type: #PUBLIC_LOCAL_API  //! Removed due to ATC
}

@Analytics: {
    technicalName: 'CSRVCQTANDEX',
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    filter: [{operator: #EQ, tableElement: 'objtype_h', value: 'BUS2000116'}],
                    table: 'crms4d_serv_h', role: #MAIN,
                    viewElement: ['ServiceObjectType', 'ServiceDocument'],
                    tableElement: ['objtype_h', 'object_id']
                },
                {
                    filter: [{operator: #EQ, tableElement: 'objtype_h', value: 'BUS2000116'}],
                    table: 'crms4d_refobj', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['ServiceObjectType', 'ServiceDocument'],
                    tableElement: ['objtype_h', 'object_id']
                }  ]  }   }   }

@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@ObjectModel: {
  representativeKey: 'ServiceDocument',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #D,
     sizeCategory:   #XL
   },
   supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
}

@ObjectModel.sapObjectNodeType.name: 'ServiceQuotation'
@Metadata.ignorePropagatedAnnotations: true

define view entity C_ServiceQuotationDEX
  as select from           I_ServiceDocumentEnhcd     as ServiceQuotation
    left outer to one join I_ServiceDocumentRefObject as ServiceQtanRefObj on  ServiceQtanRefObj.ServiceObjectType      = 'BUS2000116'
                                                                           and ServiceQtanRefObj.ServiceDocument        = ServiceQuotation.ServiceDocument
                                                                           and ServiceQtanRefObj.ServiceDocumentItem    is null
                                                                           and ServiceQtanRefObj.SrvcRefObjIsMainObject = 'X'

  association [0..1] to E_ServiceDocument as _ServiceDocumentExt on  $projection.ServiceObjectType = _ServiceDocumentExt.ServiceCategory
                                                                 and $projection.ServiceDocument   = _ServiceDocumentExt.ServiceOrder


{
      @ObjectModel.foreignKey.association: '_ServiceObjType'
  key ServiceQuotation.ServiceObjectType,
  key ServiceQuotation.ServiceDocument,
      /* Header Details */
      //      ServiceQuotation.ServiceDocumentUUID,
      //      ServiceQuotation.ServiceDocumentCharUUID,
      ServiceQuotation.ServiceDocumentDescription,
      ServiceQuotation.RequestedServiceStartDateTime,
      ServiceQuotation.RequestedServiceEndDateTime,
      ServiceQuotation.SrvcQtanValidityStartDateTime,
      ServiceQuotation.SrvcQtanValidityEndDateTime,
      @Semantics.booleanIndicator: true
      ServiceQuotation.ServiceDocumentIsReleased,
      @Semantics.booleanIndicator: true
      ServiceQuotation.ServiceDocumentIsOpen,
      @Semantics.booleanIndicator: true
      ServiceQuotation.ServiceDocumentIsRejected,

      @ObjectModel.foreignKey.association: '_SrvcDocLifecycleStatus'
      ServiceQuotation.ServiceDocumentStatus,

      /* Organizational units with the S/4 SD codes */
      ServiceQuotation.SalesOrganization,
      ServiceQuotation.DistributionChannel,
      ServiceQuotation.Division,
      ServiceQuotation.SalesOffice,
      ServiceQuotation.SalesGroup,

      ServiceQuotation.ContactPerson       as ContactPersonBusinessPartnerId,
      ServiceQuotation._ServiceTeamHeader.RespyMgmtGlobalTeamID,
      
      ServiceQuotation.SoldToParty,
      ServiceQuotation.ShipToParty,
      
      ServiceQuotation.PaymentTerms,
      @ObjectModel.foreignKey.association: '_SrvcDocumentRejectionReason'
      ServiceQuotation.ServiceDocumentRejectionReason,
      
     
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      ServiceQuotation.TransactionCurrency,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceQuotation.ServiceDocGrossAmount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceQuotation.ServiceDocNetAmount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceQuotation.ServiceDocTaxAmount,
      ServiceQuotation.ReferenceInHouseRepair,
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceQuotation.ServiceDocumentType,

      /* Reference Object Details */
//            ServiceQtanRefObj.ServiceRefObjectSequenceNumber,
      ServiceQtanRefObj.SerialNumber,
      ServiceQtanRefObj.Equipment,
      cast ( ServiceQtanRefObj.FunctionalLocation as functionallocation preserving type ) as SrvcQtanFunctionalLocation,
      ServiceQtanRefObj.ProductID,
//      ServiceQtanRefObj.ServiceDocumentItem,
//      ServiceQtanRefObj.SrvcRefObjIsMainObject,
      

      /* Keys */
      ServiceQuotation._ServiceObjType,

      ServiceQuotation._ServiceDocumentType,
      ServiceQuotation._TransactionCurrency,
      ServiceQuotation._SrvcDocLifecycleStatus,
      ServiceQuotation._SrvcDocumentRejectionReason


}
where
      ServiceQuotation.ServiceObjectType          = 'BUS2000116'
  and ServiceQuotation.ServiceDocumentIsQuotation = 'X'
```
