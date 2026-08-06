---
name: I_CH_ELECTRONICDOCINVOICE
description: CH Electronicdocinvoice
app_component: CA-GTF-CSC-EDO-CH
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
  - component:CA-GTF-CSC-EDO-CH
  - lob:Cross-Application Components
---
# I_CH_ELECTRONICDOCINVOICE

**CH Electronicdocinvoice**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-CH` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ElectronicDocUUID` | `ElectronicDocUUID` |
| `CH_ElectronicDocTransactionID` | `CH_ElectronicDocTransactionID` |
| `CH_ElectronicDocHasDunning` | `CH_ElectronicDocHasDunning` |
| `CH_ElectronicDocInvcIssuerID` | `CH_ElectronicDocInvcIssuerID` |
| `CH_ElectronicDocumentID` | `CH_ElectronicDocumentID` |
| `CH_EDocRcpntBusinessPartnerID` | `CH_EDocRcpntBusinessPartnerID` |
| `CH_EDocInvcIssuerCompanyName` | `CH_EDocInvcIssuerCompanyName` |
| `CH_EDocRcpntBusPartnerName` | `CH_EDocRcpntBusPartnerName` |
| `CH_ElectronicDocInvcIssuerTxID` | `CH_ElectronicDocInvcIssuerTxID` |
| `CH_ElectronicDocAcctgDocNmbr` | `CH_ElectronicDocAcctgDocNmbr` |
| `CH_ElectronicDocIBAN` | `CH_ElectronicDocIBAN` |
| `CH_ElectronicDocQRCodeRefNmbr` | `CH_ElectronicDocQRCodeRefNmbr` |
| `CH_ElectronicDocTotalAmount` | `CH_ElectronicDocTotalAmount` |
| `CH_ElectronicDocTotalTaxAmount` | `CH_ElectronicDocTotalTaxAmount` |
| `CH_ElectronicDocCurrency` | `CH_ElectronicDocCurrency` |
| `CH_ElectronicDocAcctgDocType` | `CH_ElectronicDocAcctgDocType` |
| `CH_ElectronicDocFormrTransID` | `CH_ElectronicDocFormrTransID` |
| `CH_ElectronicDocRecipientID` | `CH_ElectronicDocRecipientID` |
| `CH_ElectronicDocDunningLevel` | `CH_ElectronicDocDunningLevel` |
| `CH_ElectronicDocDunningDate` | `CH_ElectronicDocDunningDate` |
| `CH_ElectronicDocType` | `CH_ElectronicDocType` |
| `CH_ElectronicDocPaymentType` | `CH_ElectronicDocPaymentType` |
| `_ElectronicCurrencyText` | *Association* |
| `_ElectronicDocTypeText` | *Association* |
| `_CustomerID` | *Association* |

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

@EndUserText.label: 'Switzerland Invoice'

define view entity I_CH_ElectronicDocInvoice
  as select from R_CH_ElectronicDocInvoice
{

  key ElectronicDocUUID,
      CH_ElectronicDocTransactionID,
      CH_ElectronicDocHasDunning,
      CH_ElectronicDocInvcIssuerID,
      CH_ElectronicDocumentID,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' }, useAsTemplate: true  }]
      @ObjectModel.text.association: '_CustomerID'
      CH_EDocRcpntBusinessPartnerID,
      CH_EDocInvcIssuerCompanyName,
      CH_EDocRcpntBusPartnerName,
      CH_ElectronicDocInvcIssuerTxID,
      CH_ElectronicDocAcctgDocNmbr,
      CH_ElectronicDocIBAN,
      CH_ElectronicDocQRCodeRefNmbr,
      CH_ElectronicDocTotalAmount,
      CH_ElectronicDocTotalTaxAmount,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CURRENCYSTDVH', element: 'Currency' }, useAsTemplate: true }]
      @ObjectModel.text.association: '_ElectronicCurrencyText'
      CH_ElectronicDocCurrency,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'C_CH_ElectronicDocTypeTextVH', element: 'CH_ElectronicDocAcctgDocType' }, useAsTemplate: true }]
      @ObjectModel.text.association: '_ElectronicDocTypeText'
      CH_ElectronicDocAcctgDocType,
      CH_ElectronicDocFormrTransID,
      CH_ElectronicDocRecipientID,
      CH_ElectronicDocDunningLevel,
      CH_ElectronicDocDunningDate,
      CH_ElectronicDocType,
      CH_ElectronicDocPaymentType,
      
      _ElectronicCurrencyText,
      _ElectronicDocTypeText,
      _CustomerID

}
```
