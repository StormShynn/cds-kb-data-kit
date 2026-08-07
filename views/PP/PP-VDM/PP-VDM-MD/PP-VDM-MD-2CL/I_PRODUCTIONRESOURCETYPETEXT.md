---
name: I_PRODUCTIONRESOURCETYPETEXT
description: Productionresourcetypetext
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - text-view
  - product
  - text
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_PRODUCTIONRESOURCETYPETEXT

**Productionresourcetypetext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProductionResourceType` | ✓ | |  | `cast(substring(txt.domvalue_l, 1, 2) as productionresourcetype preserving type)` |
| `Language` | ✓ | |  | `cast(txt.ddlanguage as spras preserving type)` |
| `ProductionResourceTypeName` |  | |  | `cast(txt.ddtext as productionresourcetypename preserving type)` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPPRODRESTYPTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'ProductionResourceType'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #L, dataClass: #META }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Production Resource Type - Text'
@ObjectModel.sapObjectNodeType.name: 'ProductionResourceTypeText'
@Analytics.dataExtraction.enabled: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_ProductionResourceTypeText
  as select from dd07t as txt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key cast(substring(txt.domvalue_l, 1, 2) as productionresourcetype preserving type) as ProductionResourceType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(txt.ddlanguage as spras preserving type)                                   as Language,
      @Semantics.text: true
      cast(txt.ddtext as productionresourcetypename preserving type)                  as ProductionResourceTypeName,

      // Associations
      _Language
}
where
      txt.domname  = 'CR_OBJTY'
  and txt.as4local = 'A'
  and txt.as4vers  = '0000';
```
