---
name: I_CLFNCLASSSTATUS
description: "Clfnclassstatus"
app_component: CA-CL-2CL
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-CL
  - interface-view
  - status
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCLASSSTATUS

**Clfnclassstatus**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ClassType` | ✓ | |  | `klart` | `CHAR(3)` | Class Type |
| `ClassStatus` | ✓ | |  | `status` | `CHAR(1)` | Class status |
| `ClassificationIsAllowed` |  | |  | `cast ( ClassStatus.klfkz as classificationisallowed preserving type )` | `CHAR(1)` | Classification Is Allowed Indicator |
| `_ClassType` | | ✓ | | | | |
| `_ClassStatusText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ClassType` | `I_ClfnClassTypeBasic` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'INGCCLC3'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Status of Classification Class'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'ClassStatus'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.sapObjectNodeType.name: 'ClassificationClassStatus' 
@ObjectModel.supportedCapabilities:
  [  #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #EXTRACTION_DATA_SOURCE,
     #ANALYTICAL_DIMENSION,
     #SQL_DATA_SOURCE                  ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define root view I_ClfnClassStatus 
  as select from tclu as ClassStatus
  
     composition [0..*] of  I_ClfnClassStatusText as _ClassStatusText 
     association [0..1] to I_ClfnClassTypeBasic as _ClassType  
        on $projection.ClassType = _ClassType.ClassType  
{
      @ObjectModel.foreignKey.association: '_ClassType'
  key ClassStatus.klart             as ClassType,
      @ObjectModel.text.association: '_ClassStatusText'
  key ClassStatus.status            as ClassStatus,
      cast ( ClassStatus.klfkz as classificationisallowed preserving type ) as ClassificationIsAllowed, 
//      claedimand, 
//      auprf, 
//      dlock,        
//      klpkz,  
//      selkz, 
//      vstat,
      
      _ClassType,
      _ClassStatusText
}
```
