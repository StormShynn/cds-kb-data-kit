---
name: I_SDDOCUMENTCATEGORY
description: "Sddocumentcategory"
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
  - document
  - component:SD-CRF-2CL
  - lob:Sales & Distribution
---
# I_SDDOCUMENTCATEGORY

**Sddocumentcategory**

| Property | Value |
|---|---|
| App Component | `SD-CRF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SDDocumentCategory` | ✓ | |  | `cast(substring(dd07l.domvalue_l, 1, 4) as vbtypl preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SDDocumentCategoryText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'SDDocumentCategory'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S  
@EndUserText.label: 'SD Document Category'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDDOCCAT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #ANALYTICAL_DIMENSION,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY  ]
@ObjectModel.sapObjectNodeType.name: 'SDDocumentCategory'                                        
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_SDDocumentCategory  
as select from dd07l

association [0..*] to I_SDDocumentCategoryText as _Text on $projection.SDDocumentCategory = _Text.SDDocumentCategory
{
    @ObjectModel.text.association: '_Text'
    key cast(substring(dd07l.domvalue_l, 1, 4) as vbtypl preserving type) as SDDocumentCategory,      

    @Consumption.hidden: true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    dd07l.domvalue_l as DomainValue,    
             
    //Associations
    _Text
}
where (dd07l.domname = 'VBTYPL') and (dd07l.as4local = 'A');
```
