---
name: I_FR_ELECTRONICDOCINCGINVOICE
description: "eDocument France Incoming Invoice"
app_component: CA-GTF-CSC-EDO-FR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FR_ELECTRONICDOCINCGINVOICE')/$value
semantic_en: "eDocument France Incoming Invoice"
semantic_vi: "eDocument France Incoming Invoice — CDS view cơ bản (transactional data) dựa trên edofrsinv."
keywords:
  - "edocument"
  - "france"
  - "incoming"
  - "invoice"
  - "electronic"
  - "company"
  - "code"
  - "process"
  - "creation"
  - "date"
  - "type"
tags:
  - CA
  - bo:billingdocument
  - CA-GTF
  - CA-GTF-CSC
  - CA-GTF-CSC-EDO
  - CA-GTF-CSC-EDO-FR
  - component:CA-GTF-CSC-EDO-FR
  - document
  - interface-view
  - invoice
  - lob:cross_application components
---
# I_FR_ELECTRONICDOCINCGINVOICE

**eDocument France Incoming Invoice**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-FR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FR_ELECTRONICDOCINCGINVOICE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FR_EDocInvoiceUUID` | ✓ | |  | `edoc_guid` | `CHAR(32)` | eDocument: GUID |
| `ElectronicDocCompanyCode` |  | | `_ElectronicDoc` | `ElectronicDocCompanyCode` | `CHAR(4)` | Company Code |
| `ElectronicDocProcess` |  | | `_ElectronicDoc` | `ElectronicDocProcess` | `CHAR(10)` | eDocument Process |
| `ElectronicDocCreationDate` |  | | `_ElectronicDoc` | `ElectronicDocCreationDate` | `DATS(8)` | Creation Date |
| `FR_EDocSupInvoiceType` |  | |  | `invoice_type` | `CHAR(1)` | Invoice Type |
| `FR_EDocInvoiceTypeCode` |  | |  | `invoice_type_code` | `CHAR(10)` | eDocument France: Invoice Type Code |
| `FR_ElectronicDocSuppEmailAddr` |  | |  | `supplier_electronic_adrc` | `CHAR(125)` | eDocument France: Supplier Electronic Address |
| `FR_ElectronicDocCustEmailAddr` |  | |  | `customer_electronic_adrc` | `CHAR(125)` | eDocument France: Customer Electronic Address |
| `FR_ElectronicDocInvoiceID` |  | |  | `invoice_id` | `CHAR(35)` | Invoice ID |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ElectronicDoc` | `I_ElectronicDoc` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FR_ELECTRONICDOCINCGINVOICE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FR_ELECTRONICDOCINCGINVOICE')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@ObjectModel: {
  usageType:{
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #TRANSACTIONAL
  },
  supportedCapabilities: [#SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #NONE
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'eDocument France Incoming Invoice'
define view entity I_FR_ElectronicDocIncgInvoice as select from edofrsinv
association [1..1] to I_ElectronicDoc as _ElectronicDoc on edofrsinv.edoc_guid = _ElectronicDoc.ElectronicDocUUID
{
  key edofrsinv.edoc_guid                     as FR_EDocInvoiceUUID,
      _ElectronicDoc.ElectronicDocCompanyCode as ElectronicDocCompanyCode,
      _ElectronicDoc.ElectronicDocProcess as ElectronicDocProcess,
      _ElectronicDoc.ElectronicDocCreationDate as ElectronicDocCreationDate,
      edofrsinv.invoice_type                  as FR_EDocSupInvoiceType,
      edofrsinv.invoice_type_code             as FR_EDocInvoiceTypeCode,
      edofrsinv.supplier_electronic_adrc      as FR_ElectronicDocSuppEmailAddr,
      edofrsinv.customer_electronic_adrc      as FR_ElectronicDocCustEmailAddr,
      edofrsinv.invoice_id as FR_ElectronicDocInvoiceID
}
```
