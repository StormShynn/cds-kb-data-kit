---
name: I_TOTALSDDOCREFERENCESTATUST
description: "Totalsddocreferencestatust"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - status
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_TOTALSDDOCREFERENCESTATUST

**Totalsddocreferencestatust**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TotalSDDocReferenceStatus` | ✓ | |  | `statu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `TotalSDDocReferenceStatusDesc` |  | |  | `bezei` |  |  |
| `_TotalSDDocReferenceStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TotalSDDocReferenceStatus` | `I_TotalSDDocReferenceStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'TotalSDDocReferenceStatus'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S 
@EndUserText.label: 'Total Reference Status of SD Document - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDTOTSDDCRFSTST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #EXTRACTION_DATA_SOURCE ]
                                        
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_TotalSDDocReferenceStatusT
as select from tvbst

association[0..1] to I_TotalSDDocReferenceStatus as _TotalSDDocReferenceStatus on $projection.TotalSDDocReferenceStatus = _TotalSDDocReferenceStatus.TotalSDDocReferenceStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_TotalSDDocReferenceStatus'
    key statu as TotalSDDocReferenceStatus,
    
    @ObjectModel.foreignKey.association: '_Language'
    @Semantics.language: true
    key spras as Language,
    
    @Semantics.text: true
    bezei as TotalSDDocReferenceStatusDesc,
    
    //Associations
    _TotalSDDocReferenceStatus,
    _Language
}
where (tvbst.tbnam = 'VBAP') and (tvbst.fdnam = 'RFGSA');
```
