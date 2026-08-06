---
name: I_IT_ELECTRONICDOCINCGINVOICE
description: IT Electronicdocincginvoice
app_component: CA-GTF-CSC-EDO-IT
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - component:CA-GTF-CSC-EDO-IT
  - lob:Cross-Application Components
---
# I_IT_ELECTRONICDOCINCGINVOICE

**IT Electronicdocincginvoice**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-IT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ElectronicDocUUID` | `ElectronicDocUUID` |
| `IT_ElectronicDocDeliveredDate` | `IT_ElectronicDocDeliveredDate` |
| `PurchaseOrderByCustomer` | `PurchaseOrderByCustomer` |
| `IT_ElectronicDocInvoiceNumber` | `IT_ElectronicDocInvoiceNumber` |
| `PurchasingDocumentAmount` | `PurchasingDocumentAmount` |
| `PurchaseOrderCurrency` | `PurchaseOrderCurrency` |
| `IT_ElectronicDocExchSystemID` | `IT_ElectronicDocExchSystemID` |
| `IT_ElectronicDocRecipientTaxID` | `IT_ElectronicDocRecipientTaxID` |
| `IT_ElectronicDocRcpntEmailAddr` | `IT_ElectronicDocRcpntEmailAddr` |
| `IT_ElectronicDocExtDocType` | `IT_ElectronicDocExtDocType` |
| `IT_ElectronicDocRejectionCode` | `IT_ElectronicDocRejectionCode` |
| `IT_ElectronicDocRejectionText` | `IT_ElectronicDocRejectionText` |
| `IT_ElectronicDocRjcnEmailAddr` | `IT_ElectronicDocRjcnEmailAddr` |
| `IT_ElectronicDocSuplrCtryCode` | `IT_ElectronicDocSuplrCtryCode` |
| `IT_ElectronicDocSuplrTaxID` | `IT_ElectronicDocSuplrTaxID` |
| `IT_ElectronicDocSupplierName` | `IT_ElectronicDocSupplierName` |
| `_ElectronicRejectCode` | *Association* |
| `_CountryText` | *Association* |
| `_CurrencyText` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
  usageType:{
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #TRANSACTIONAL
  },
  supportedCapabilities: [#SQL_DATA_SOURCE, 
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #UI_PROVIDER_PROJECTION_SOURCE],                                                
  modelingPattern: #NONE
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Italy Incoming Invoice'

define view entity I_IT_ElectronicDocIncgInvoice
  as select from R_IT_ElectronicDocIncgInvoice
{

  key ElectronicDocUUID,
      IT_ElectronicDocDeliveredDate,
      PurchaseOrderByCustomer,
      IT_ElectronicDocInvoiceNumber,
      @Semantics.amount.currencyCode: 'PurchaseOrderCurrency'
      @Consumption.valueHelpDefinition: [ { entity:  { name:    'I_CurrencyStdVH', element: 'Currency' }, useAsTemplate: true }]
      @ObjectModel.text.association: '_CurrencyText'
      PurchasingDocumentAmount,
      PurchaseOrderCurrency,
      IT_ElectronicDocExchSystemID,
      IT_ElectronicDocRecipientTaxID,
      IT_ElectronicDocRcpntEmailAddr,
      IT_ElectronicDocExtDocType,
      @Consumption.valueHelpDefinition: [ { entity:  { name:    'C_IT_ElectronicDocRejectCodeVH', element: 'IT_ElectronicDocRejectCodeText' }, useAsTemplate: true  }]
      @ObjectModel.text.association: '_ElectronicRejectCode'
      IT_ElectronicDocRejectionCode,
      IT_ElectronicDocRejectionText,
      IT_ElectronicDocRjcnEmailAddr,
      @Consumption.valueHelpDefinition: [ { entity:  { name:    'I_CountryVH', element: 'Country' }, useAsTemplate: true  }]
      @ObjectModel.text.association: '_CountryText'
      IT_ElectronicDocSuplrCtryCode,
      IT_ElectronicDocSuplrTaxID,
      IT_ElectronicDocSupplierName,
      
      _ElectronicRejectCode,
      _CountryText,
      _CurrencyText

}
```
