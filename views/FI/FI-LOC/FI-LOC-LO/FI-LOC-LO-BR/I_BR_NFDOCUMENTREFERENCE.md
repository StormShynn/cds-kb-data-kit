---
name: I_BR_NFDOCUMENTREFERENCE
description: This CDS view displays the NF-e referred in the nota fiscal document. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFDOCUMENTREFERENCE')/$value
semantic_en: This CDS view displays the NF-e referred in the nota fiscal document. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
semantic_vi: Brazil Nota Fiscal Document Reference — CDS view giao diện dựa trên j_1bnf_docref.
keywords:
  - brazil
  - nota
  - fiscal
  - document
  - reference
  - sequence
  - number
  - type
  - access
tags:
  - FI
  - bo:companycode
  - component:FI-LOC-LO-BR
  - document
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-BR
  - interface-view
  - lob:finance
  - lob:logistics general
---
# I_BR_NFDOCUMENTREFERENCE

**This CDS view displays the NF-e referred in the nota fiscal document. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFDOCUMENTREFERENCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_NotaFiscal` | ✓ | |  | `docnum` | `NUMC(10)` | Document Number |
| `BR_NFDocRefSequenceNumber` | ✓ | |  | `counter` | `NUMC(3)` | Counter |
| `BR_NFDocumentReferenceType` |  | |  | `cast(docref_type as logbr_documentreferencetype preserving type )` | `CHAR(1)` | Document Reference Type |
| `BR_NFDocReferenceAccessKey` |  | |  | `cast(access_key as logbr_documentrefaccesskey preserving type )` | `CHAR(44)` | 44-Digit Access Key |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFDOCUMENTREFERENCE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFDOCUMENTREFERENCE')/$value)*

```abap
@EndUserText.label: 'Brazil Nota Fiscal Document Reference'
@AbapCatalog.sqlViewName: 'IBRNFDOCREF'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
define view I_BR_NFDocumentReference as 
  select from j_1bnf_docref {
    key docnum as BR_NotaFiscal,
    key counter as BR_NFDocRefSequenceNumber,
    cast(docref_type as logbr_documentreferencetype preserving type ) as BR_NFDocumentReferenceType,
    cast(access_key as logbr_documentrefaccesskey preserving type ) as BR_NFDocReferenceAccessKey
}
```
