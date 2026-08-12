---
name: I_BPCOMPANYRELATIONSHIP
description: "Bpcompanyrelationship"
app_component: FS-BP
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
  - FS
  - FS-BP
  - interface-view
  - component:FS-BP
  - lob:Other
---
# I_BPCOMPANYRELATIONSHIP

**Bpcompanyrelationship**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
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
| `BPCompanyRelationship` | ✓ | |  | `cast ( dd07l.domvalue_l as bp_comp_re )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPCompanyRelationshipText` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPCORELSHP',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { representativeKey: 'BPCompanyRelationship',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #M
                           },  
                sapObjectNodeType.name: 'DE_BPOrgRelationshipCode',
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [  #ANALYTICAL_DIMENSION,
                                          #EXTRACTION_DATA_SOURCE, // for API Hub
                                          #SQL_DATA_SOURCE]                      
              }
@Analytics: { dataExtraction.enabled: true,
              dataCategory: #DIMENSION,
              internalName: #LOCAL 
            }
@Metadata: { allowExtensions:true, 
             ignorePropagatedAnnotations: true // For C1-Release
           }  
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED // according to XLS / DCL 
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Company Relationship of BP'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_BPCompanyRelationship 
  as select from dd07l
  
    association [0..*] to I_BPCompanyRelationshipText as _Text on $projection.BPCompanyRelationship = _Text.BPCompanyRelationship
  {
     @ObjectModel.text.association: '_Text'
  key cast ( dd07l.domvalue_l as bp_comp_re ) as BPCompanyRelationship,
      _Text
}
where
      dd07l.domname  = 'BP_COMP_RE'
  and dd07l.as4local = 'A'
```
