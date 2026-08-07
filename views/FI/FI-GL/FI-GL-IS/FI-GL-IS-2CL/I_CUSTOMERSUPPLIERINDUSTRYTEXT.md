---
name: I_CUSTOMERSUPPLIERINDUSTRYTEXT
description: Customersupplierindustrytext
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - text-view
  - customer
  - supplier
  - text
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:Customer
  - bo:Supplier
---
# I_CUSTOMERSUPPLIERINDUSTRYTEXT

**Customersupplierindustrytext**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |
| `Industry` | ✓ | |  | `cast(t016t.brsch as fis_brsch preserving type )` |
| `CustomerSupplierIndustryName` |  | |  | `cast(t016t.brtxt as fis_customersupplierindustry_n preserving type )` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics: { dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IFIINDUSTRYTEXT'
@ObjectModel.representativeKey: 'Industry'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #S
@ObjectModel.usageType.dataClass: #MASTER
@EndUserText.label: 'Customer Supplier Industry - Text'
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY]
define view entity I_CustomerSupplierIndustryText
  as select from t016t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      //t016t
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key t016t.spras as Language,
  key cast(t016t.brsch as fis_brsch preserving type ) as  Industry,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast(t016t.brtxt as fis_customersupplierindustry_n preserving type ) as CustomerSupplierIndustryName,
      
      /* Associations */
      //I_Language
      _Language

}
```
