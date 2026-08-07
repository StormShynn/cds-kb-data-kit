---
name: I_BILLOFMATERIALSTATUSTEXT
description: Bill of MaterialSTATUSTEXT
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - interface-view
  - text-view
  - material
  - bill-of-material
  - text
  - status
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# I_BILLOFMATERIALSTATUSTEXT

**Bill of MaterialSTATUSTEXT**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `BillOfMaterialStatus` | ✓ | |  | `stlst` |  |  |
| `BillOfMaterialStatusText` |  | |  | `sttxt` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBOMSTATUSTEXT'
@ObjectModel.dataCategory: #TEXT
@Search.searchable: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'BillOfMaterialStatus'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@VDM.viewType: #BASIC 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Bill Of Material Status - Text'
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE, 
                                      #CDS_MODELING_DATA_SOURCE,
                                       #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'BillOfMaterialStatusText' 
define view I_BillOfMaterialStatusText as select from t415t 


  association[0..1] to I_Language as _Language 
    on $projection.Language = _Language.Language
    {
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    _Language,
    key stlst as BillOfMaterialStatus,
    @Semantics.text: true
    @EndUserText.label:'Description of BOM Status' 
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    @Search.fuzzinessThreshold: 0.8
    sttxt as BillOfMaterialStatusText
    
}
```
