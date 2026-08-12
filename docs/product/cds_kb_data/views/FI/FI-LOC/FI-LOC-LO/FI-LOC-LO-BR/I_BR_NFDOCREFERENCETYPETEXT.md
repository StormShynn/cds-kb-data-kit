---
name: I_BR_NFDOCREFERENCETYPETEXT
description: "Brazil Nota Fiscal Doc Ref Type - Text"
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFDOCREFERENCETYPETEXT')/$value
semantic_en: "Brazil Nota Fiscal Doc Ref Type - Text"
semantic_vi: "Brazil Nota Fiscal Doc Ref Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "brazil"
  - "nota"
  - "fiscal"
  - "doc"
  - "ref"
  - "type"
  - "text"
  - "language"
  - "document"
  - "reference"
  - "desc"
tags:
  - FI
  - bo:companycode
  - component:FI-LOC-LO-BR
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-BR
  - interface-view
  - lob:finance
  - lob:logistics general
---
# I_BR_NFDOCREFERENCETYPETEXT

**Brazil Nota Fiscal Doc Ref Type - Text**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFDOCREFERENCETYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `BR_NFDocumentReferenceType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_documentreferencetype preserving type )` | `CHAR(1)` | Document Reference Type |
| `BR_NFDocumentReferenceTypeDesc` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_BR_NFDocumentReferenceType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFDocumentReferenceType` | `I_BR_NFDocumentReferenceType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFDOCREFERENCETYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFDOCREFERENCETYPETEXT')/$value)*

```abap
@EndUserText.label: 'Brazil Nota Fiscal Doc Ref Type - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFDOCREFTYPET'
@ObjectModel.representativeKey: 'BR_NFDocumentReferenceType'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
define view I_BR_NFDocReferenceTypeText as select from dd07t
  association [1..1] to I_BR_NFDocumentReferenceType as _BR_NFDocumentReferenceType on $projection.BR_NFDocumentReferenceType = _BR_NFDocumentReferenceType.BR_NFDocumentReferenceType
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type ) as Language,
  @ObjectModel.foreignKey.association: '_BR_NFDocumentReferenceType'
  key cast ( substring( domvalue_l, 1, 1 ) as logbr_documentreferencetype preserving type ) as BR_NFDocumentReferenceType,  
  @Semantics.text
  ddtext as BR_NFDocumentReferenceTypeDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
  _BR_NFDocumentReferenceType, 
  _Language 
}
where domname  = 'J_1B_NF_DOCREFTYP' 
  and as4local = 'A'
```
