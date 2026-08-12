---
name: I_CH_ELECTRONICDOCINVOICE
description: "CH Electronicdocinvoice"
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
# I_CH_ELECTRONICDOCINVOICE

**CH Electronicdocinvoice**

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
| `ElectronicDocUUID` | ✓ | |  |  |  |  |
| `CH_ElectronicDocTransactionID` |  | |  |  |  |  |
| `CH_ElectronicDocHasDunning` |  | |  |  |  |  |
| `CH_ElectronicDocInvcIssuerID` |  | |  |  |  |  |
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
| `CH_ElectronicDocAcctgDocType` |  | |  |  |  |  |
| `CH_ElectronicDocFormrTransID` |  | |  |  |  |  |
| `CH_ElectronicDocRecipientID` |  | |  |  |  |  |
| `CH_ElectronicDocDunningLevel` |  | |  |  |  |  |
| `CH_ElectronicDocDunningDate` |  | |  |  |  |  |
| `CH_ElectronicDocType` |  | |  |  |  |  |
| `CH_ElectronicDocPaymentType` |  | |  |  |  |  |
| `_ElectronicCurrencyText` | | ✓ | | | | |
| `_ElectronicDocTypeText` | | ✓ | | | | |
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
