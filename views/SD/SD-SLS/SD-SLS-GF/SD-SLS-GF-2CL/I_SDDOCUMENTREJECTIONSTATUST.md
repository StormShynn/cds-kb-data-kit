---
name: I_SDDOCUMENTREJECTIONSTATUST
description: Sddocumentrejectionstatust
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - document
  - status
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_SDDOCUMENTREJECTIONSTATUST

**Sddocumentrejectionstatust**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SDDocumentRejectionStatus` | ✓ | |  | `statu` |
| `Language` | ✓ | |  | `spras` |
| `SDDocumentRejectionStatusDesc` |  | |  | `bezei` |
| `_SDDocumentRejectionStatus` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SDDocumentRejectionStatus` | `I_SDDocumentRejectionStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SDDocumentRejectionStatus'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S  
@EndUserText.label: 'Rejection Status of SD Document - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDDOCRJCNSTST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #EXTRACTION_DATA_SOURCE   ]
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_SDDocumentRejectionStatusT
as select from tvbst

association[0..1] to I_SDDocumentRejectionStatus as _SDDocumentRejectionStatus on $projection.SDDocumentRejectionStatus = _SDDocumentRejectionStatus.SDDocumentRejectionStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_SDDocumentRejectionStatus'
    key statu as SDDocumentRejectionStatus,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    bezei as SDDocumentRejectionStatusDesc,
    
    //Associations
    _SDDocumentRejectionStatus,
    _Language
}
where (tvbst.tbnam = 'VBAP') and (tvbst.fdnam = 'ABSTA');
```
