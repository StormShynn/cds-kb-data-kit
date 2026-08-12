---
name: I_BPCOCODECOMPANYRELSHPTEXT
description: "Company Relshp of BP in CoCode - Text"
app_component: FS-BP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPCOCODECOMPANYRELSHPTEXT')/$value
semantic_en: "Company Relshp of BP in CoCode - Text"
semantic_vi: "Company Relshp of BP in CoCode - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "company"
  - "relshp"
  - "cocode"
  - "text"
  - "language"
  - "code"
  - "relationship"
  - "desc"
tags:
  - FS
  - bo:businesspartner
  - component:FS-BP
  - FS-BP
  - interface-view
---
# I_BPCOCODECOMPANYRELSHPTEXT

**Company Relshp of BP in CoCode - Text**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPCOCODECOMPANYRELSHPTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `BPCoCodeCompanyRelationship` | ✓ | |  | `cast ( dd07t.domvalue_l as bp_ccom_re )` | `CHAR(1)` | Company Relationship in Company Code |
| `BPCoCodeCompanyRelshpDesc` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_BPCoCodeCompanyRelationship` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPCoCodeCompanyRelationship` | `I_BPCoCodeCompanyRelationship` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPCOCODECOMPANYRELSHPTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPCOCODECOMPANYRELSHPTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBPCCCORELTXT'
@EndUserText.label: 'Company Relshp of BP in CoCode - Text'
@ObjectModel.representativeKey: 'BPCoCodeCompanyRelationship'

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.buffering.status: #NOT_ALLOWED
// @AbapCatalog.preserveKey // only if required by ATC check
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: #LANGUAGE_DEPENDENT_TEXT
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true // For C1-Release

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] } */
define view I_BPCoCodeCompanyRelshpText 
  as select from dd07t
  association [0..1] to I_BPCoCodeCompanyRelationship as _BPCoCodeCompanyRelationship on $projection.BPCoCodeCompanyRelationship = _BPCoCodeCompanyRelationship.BPCoCodeCompanyRelationship
  association [0..1] to I_Language                    as _Language                    on $projection.Language                    = _Language.Language
{

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage as Language,
  
      @ObjectModel.text.element: 'BPCoCodeCompanyRelshpDesc'
      @ObjectModel.foreignKey.association: '_BPCoCodeCompanyRelationship'
  key cast ( dd07t.domvalue_l as bp_ccom_re ) as BPCoCodeCompanyRelationship,
      @Semantics.text: true
      
      dd07t.ddtext     as BPCoCodeCompanyRelshpDesc,
      
      _BPCoCodeCompanyRelationship,
      _Language

}
where
      dd07t.domname  = 'BP_COMP_RE'
  and dd07t.as4local = 'A'
```
