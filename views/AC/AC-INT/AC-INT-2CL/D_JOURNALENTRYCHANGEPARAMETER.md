---
name: D_JOURNALENTRYCHANGEPARAMETER
description: D Journal EntryCHANGEPARAMETER
app_component: AC-INT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AC
  - AC-INT
  - journal-entry
  - component:AC-INT-2CL
  - lob:Other
  - bo:JournalEntry
---
# D_JOURNALENTRYCHANGEPARAMETER

**D Journal EntryCHANGEPARAMETER**

| Property | Value |
|---|---|
| App Component | `AC-INT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `DocumentHeaderText` | `bktxt` |
| `DocumentReferenceID` | `xblnr1` |
| `JrnlEntryCntrySpecificRef1` | `fac_glo_ref1_hd` |
| `JrnlEntryCntrySpecificDate1` | `fac_glo_dat1_hd` |
| `JrnlEntryCntrySpecificRef2` | `fac_glo_ref2_hd` |
| `JrnlEntryCntrySpecificDate2` | `fac_glo_dat2_hd` |
| `JrnlEntryCntrySpecificRef3` | `fac_glo_ref3_hd` |
| `JrnlEntryCntrySpecificDate3` | `fac_glo_dat3_hd` |
| `JrnlEntryCntrySpecificRef4` | `fac_glo_ref4_hd` |
| `JrnlEntryCntrySpecificDate4` | `fac_glo_dat4_hd` |
| `JrnlEntryCntrySpecificRef5` | `fac_glo_ref5_hd` |
| `JrnlEntryCntrySpecificDate5` | `fac_glo_dat5_hd` |
| `JrnlEntryCntrySpecificBP1` | `fac_glo_bp1_hd` |
| `JrnlEntryCntrySpecificBP2` | `fac_glo_bp2_hd` |
| `PlannedReversalDate` | `fis_stodt` |
| `D_JournalEntryChangeGLItemP` | `_GLItems : composition [0..*] of D_JournalEntryChangeGLItemP` |
| `D_JournalEntryChangeAPARItemP` | `_APARItems : composition [0..*] of D_JournalEntryChangeAPARItemP` |

## Source Code

```abap
@EndUserText.label: 'Journal Entry Change'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define root abstract entity D_JournalEntryChangeParameter
{
 // key DummyKey                     : abap.char(1);
      DocumentHeaderText           : bktxt;
      DocumentReferenceID          : xblnr1;
      JrnlEntryCntrySpecificRef1   : fac_glo_ref1_hd;
      JrnlEntryCntrySpecificDate1  : fac_glo_dat1_hd;
      JrnlEntryCntrySpecificRef2   : fac_glo_ref2_hd;
      JrnlEntryCntrySpecificDate2  : fac_glo_dat2_hd;
      JrnlEntryCntrySpecificRef3   : fac_glo_ref3_hd;
      JrnlEntryCntrySpecificDate3  : fac_glo_dat3_hd;
      JrnlEntryCntrySpecificRef4   : fac_glo_ref4_hd;
      JrnlEntryCntrySpecificDate4  : fac_glo_dat4_hd;
      JrnlEntryCntrySpecificRef5   : fac_glo_ref5_hd;
      JrnlEntryCntrySpecificDate5  : fac_glo_dat5_hd;           
      JrnlEntryCntrySpecificBP1    : fac_glo_bp1_hd; 
      JrnlEntryCntrySpecificBP2    : fac_glo_bp2_hd;
      PlannedReversalDate          : fis_stodt;      
     _GLItems                      : composition [0..*] of D_JournalEntryChangeGLItemP;
     _APARItems                    : composition [0..*] of D_JournalEntryChangeAPARItemP;
   
      
            
}
```
