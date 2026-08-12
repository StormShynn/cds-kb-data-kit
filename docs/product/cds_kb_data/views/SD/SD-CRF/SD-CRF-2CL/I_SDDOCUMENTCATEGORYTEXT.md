---
name: I_SDDOCUMENTCATEGORYTEXT
description: "Sddocumentcategorytext"
app_component: SD-CRF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-CRF
  - interface-view
  - text-view
  - document
  - text
  - component:SD-CRF-2CL
  - lob:Sales & Distribution
---
# I_SDDOCUMENTCATEGORYTEXT

**Sddocumentcategorytext**

| Property | Value |
|---|---|
| App Component | `SD-CRF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SDDocumentCategory` | ✓ | |  | `cast(substring(dd07t.domvalue_l, 1, 4) as vbtypl preserving type)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `SDDocumentCategoryName` |  | |  | `cast(ddtext as sddocumentcategoryname preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_SDDocumentCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SDDocumentCategory` | `I_SDDocumentCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SDDocumentCategory'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S 
@EndUserText.label: 'SD Document Category - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDDOCCATTEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY   ]
/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_SDDocumentCategoryText
as select from dd07t 

association[0..1] to I_SDDocumentCategory as _SDDocumentCategory on $projection.SDDocumentCategory = _SDDocumentCategory.SDDocumentCategory
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{   
    @ObjectModel.foreignKey.association: '_SDDocumentCategory'
    key cast(substring(dd07t.domvalue_l, 1, 4) as vbtypl preserving type) as SDDocumentCategory,
          
    @ObjectModel.foreignKey.association: '_Language'
    @Semantics.language: true
    key ddlanguage as Language,
    
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8     
    @Semantics.text: true
    @Search.ranking: #LOW 
    cast(ddtext as sddocumentcategoryname preserving type) as SDDocumentCategoryName,

    @Consumption.hidden: true
    dd07t.domvalue_l as DomainValue, 
       
    //Associations
    _SDDocumentCategory,
    _Language
} 
where (domname = 'VBTYPL') and (as4local = 'A');
```
