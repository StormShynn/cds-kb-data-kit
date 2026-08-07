---
name: I_SDDOCUMENTOBJECTTEXT
description: "Sddocumentobjecttext"
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-ANA
  - interface-view
  - text-view
  - document
  - text
  - component:SD-ANA-2CL
  - lob:Sales & Distribution
---
# I_SDDOCUMENTOBJECTTEXT

**Sddocumentobjecttext**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SDDocumentObject` | ✓ | |  | `cast(SUBSTRING(dd07t.domvalue_l, 1, 1) as sd_doc_object preserving type )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `SDDocumentObjectName` |  | |  | `cast(ddtext as sd_doc_object_name)` |  |  |
| `_SDDocumentObject` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SDDocumentObject` | `I_SDDocumentObject` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SDDocumentObject'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S 
@EndUserText.label: 'SD Document Object - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDDOCOBJTEXT' 
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:         #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE ]

define view I_SDDocumentObjectText
as select from dd07t

association[0..1] to I_SDDocumentObject as _SDDocumentObject on $projection.SDDocumentObject = _SDDocumentObject.SDDocumentObject
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_SDDocumentObject' 
    @ObjectModel.text.element:  [ 'SDDocumentObjectName' ]  
    key cast(SUBSTRING(dd07t.domvalue_l, 1, 1) as sd_doc_object preserving type ) as SDDocumentObject,
    
    @Semantics.language
    @ObjectModel.foreignKey.association: '_Language' 
    key ddlanguage as Language,
    
    @Semantics.text: true
    cast(ddtext as sd_doc_object_name) as  SDDocumentObjectName, 
        
    //Associations
    _SDDocumentObject, 
    _Language
} 

where domname = 'VBOBJ' and as4local = 'A';
```
