---
name: I_IT_ELECTRONICDOCINCGINVOICE
description: "IT Electronicdocincginvoice"
app_component: CA-GTF-CSC-EDO-IT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ElectronicDocUUID` | ✓ | |  |  |  |  |
| `IT_ElectronicDocDeliveredDate` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `IT_ElectronicDocInvoiceNumber` |  | |  |  |  |  |
| `PurchasingDocumentAmount` |  | |  |  |  |  |
| `PurchaseOrderCurrency` |  | |  |  |  |  |
| `IT_ElectronicDocExchSystemID` |  | |  |  |  |  |
| `IT_ElectronicDocRecipientTaxID` |  | |  |  |  |  |
| `IT_ElectronicDocRcpntEmailAddr` |  | |  |  |  |  |
| `IT_ElectronicDocExtDocType` |  | |  |  |  |  |
| `IT_ElectronicDocRejectionCode` |  | |  |  |  |  |
| `IT_ElectronicDocRejectionText` |  | |  |  |  |  |
| `IT_ElectronicDocRjcnEmailAddr` |  | |  |  |  |  |
| `IT_ElectronicDocSuplrCtryCode` |  | |  |  |  |  |
| `IT_ElectronicDocSuplrTaxID` |  | |  |  |  |  |
| `IT_ElectronicDocSupplierName` |  | |  |  |  |  |
| `_ElectronicRejectCode` | | ✓ | | | | |
| `_CountryText` | | ✓ | | | | |
| `_CurrencyText` | | ✓ | | | | |

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
