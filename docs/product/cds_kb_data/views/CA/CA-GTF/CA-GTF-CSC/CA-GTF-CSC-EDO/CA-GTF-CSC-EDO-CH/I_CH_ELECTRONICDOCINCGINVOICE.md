---
name: I_CH_ELECTRONICDOCINCGINVOICE
description: "CH Electronicdocincginvoice"
app_component: CA-GTF-CSC-EDO-CH
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ElectronicDocUUID` | ✓ | |  |  | `CHAR(32)` | eDocument: GUID |
| `CH_ElectronicDocInvcIssuerID` |  | |  |  | `CHAR(17)` | Unique identification number by PostFinance |
| `CH_ElectronicDocRecipientID` |  | |  |  | `CHAR(17)` | Recipient ID |
| `CH_ElectronicDocTransactionID` |  | |  |  | `CHAR(32)` | Transaction ID |
| `CH_ElectronicDocumentID` |  | |  |  | `CHAR(70)` | Document ID |
| `CH_EDocRcpntBusinessPartnerID` |  | |  |  | `CHAR(10)` | Recipient Customer ID |
| `CH_EDocInvcIssuerCompanyName` |  | |  |  | `CHAR(40)` | Biller Company Name |
| `CH_EDocRcpntBusPartnerName` |  | |  |  | `CHAR(40)` | Recipient Customer Name |
| `CH_ElectronicDocInvcIssuerTxID` |  | |  |  | `CHAR(20)` | Biller Tax ID |
| `CH_ElectronicDocAcctgDocNmbr` |  | |  |  | `CHAR(35)` | Document Reference |
| `CH_ElectronicDocIBAN` |  | |  |  | `CHAR(34)` | Biller IBAN |
| `CH_ElectronicDocQRCodeRefNmbr` |  | |  |  | `CHAR(140)` | QR/SCOR Reference |
| `CH_ElectronicDocTotalAmount` |  | |  |  | `DEC(23)` | Total Amount Inclusive Tax |
| `CH_ElectronicDocTotalTaxAmount` |  | |  |  | `DEC(23)` | Total Tax |
| `CH_ElectronicDocCurrency` |  | |  |  | `CHAR(3)` | Currency |
| `CH_ElectronicDocType` |  | |  |  | `CHAR(20)` | Document Type defined by Service Provider |
| `CH_ElectronicDocPaymentType` |  | |  |  | `CHAR(20)` | Payment Type |
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
