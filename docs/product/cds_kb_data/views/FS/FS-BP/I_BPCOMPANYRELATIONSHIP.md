---
name: I_BPCOMPANYRELATIONSHIP
description: "Bpcompanyrelationship"
app_component: FS-BP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
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
