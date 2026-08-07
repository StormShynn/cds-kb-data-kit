---
name: I_BR_NFDOCUMENTREFERENCETYPE
description: This CDS view provides the document reference type codes available to be used in the nota fiscal document. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFDOCUMENTREFERENCETYPE')/$value
semantic_en: This CDS view provides the document reference type codes available to be used in the nota fiscal document. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
semantic_vi: Brazil Nota Fiscal Document Ref Type — CDS view giao diện dựa trên dd07l.
keywords:
  - brazil
  - nota
  - fiscal
  - document
  - ref
  - type
  - reference
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
# I_BR_NFDOCUMENTREFERENCETYPE

**This CDS view provides the document reference type codes available to be used in the nota fiscal document. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFDOCUMENTREFERENCETYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_NFDocumentReferenceType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_documentreferencetype preserving type )` | `CHAR(1)` | Document Reference Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_NFDocReferenceTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFDOCUMENTREFERENCETYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFDOCUMENTREFERENCETYPE')/$value)*

```abap
@EndUserText.label: 'Brazil Nota Fiscal Document Ref Type'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFDOCREFTYPE'
@ObjectModel.representativeKey: 'BR_NFDocumentReferenceType'
@ObjectModel.compositionRoot: true
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE, 
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.dataCategory: #VALUE_HELP
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
define view I_BR_NFDocumentReferenceType as select from dd07l
  association [0..*] to I_BR_NFDocReferenceTypeText as _Text on $projection.BR_NFDocumentReferenceType = _Text.BR_NFDocumentReferenceType
{
  @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as logbr_documentreferencetype preserving type ) as BR_NFDocumentReferenceType,  
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
where domname  = 'J_1B_NF_DOCREFTYP' 
  and as4local = 'A'
```
