---
name: I_CH_ELECTRONICDOCINCGINVOICE
description: "CH Electronicdocincginvoice"
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
# I_CH_ELECTRONICDOCINCGINVOICE

**CH Electronicdocincginvoice**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-CH` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ElectronicDocUUID` | ✓ | |  |  |  |  |
| `CH_ElectronicDocInvcIssuerID` |  | |  |  |  |  |
| `CH_ElectronicDocRecipientID` |  | |  |  |  |  |
| `CH_ElectronicDocTransactionID` |  | |  |  |  |  |
| `CH_ElectronicDocumentID` |  | |  |  |  |  |
| `CH_EDocRcpntBusinessPartnerID` |  | |  |  |  |  |
| `CH_EDocInvcIssuerCompanyName` |  | |  |  |  |  |
| `CH_EDocRcpntBusPartnerName` |  | |  |  |  |  |
| `CH_ElectronicDocInvcIssuerTxID` |  | |  |  |  |  |
| `CH_ElectronicDocAcctgDocNmbr` |  | |  |  |  |  |
| `CH_ElectronicDocIBAN` |  | |  |  |  |  |
| `CH_ElectronicDocQRCodeRefNmbr` |  | |  |  |  |  |
| `CH_ElectronicDocTotalAmount` |  | |  |  |  |  |
| `CH_ElectronicDocTotalTaxAmount` |  | |  |  |  |  |
| `CH_ElectronicDocCurrency` |  | |  |  |  |  |
| `CH_ElectronicDocType` |  | |  |  |  |  |
| `CH_ElectronicDocPaymentType` |  | |  |  |  |  |
| `_ElectronicCurrencyText` | | ✓ | | | | |
| `_CustomerID` | | ✓ | | | | |

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

@EndUserText.label: 'Switzerland Incoming Invoice'

define view entity I_CH_ElectronicDocIncgInvoice
  as select from R_CH_ElectronicDocIncgInvoice
{

  key ElectronicDocUUID,
      CH_ElectronicDocInvcIssuerID,
      CH_ElectronicDocRecipientID,
      CH_ElectronicDocTransactionID,
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
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CurrencyStdVH',  element: 'Currency' }, useAsTemplate: true  }]
      @ObjectModel.text.association: '_ElectronicCurrencyText'
      CH_ElectronicDocCurrency,
      CH_ElectronicDocType,
      CH_ElectronicDocPaymentType,
            
      _ElectronicCurrencyText,
      _CustomerID
}
```
